/*
* operat indexDB
*   - openDB
*   - saveData
*   - getAllData
*   - deleteData
*   - serachData
*/

class DB {
  constructor() {
    this.DBName = 'calllog';
    this.storeName = 'calllog_store';
    this.db = null;

    // build item
    this.getLogItemMainKey = item => {
      const id = `${item.groupKey}-${item.number}-${item.callType}-${
        item.serviceId
      }`;
      return id.replace(/\//g, '');
    };

    this.rebuildLogItem = item => {
      const newItem = { ...item };
      newItem.date = item.date || Date.now() - parseInt(item.duration, 10);

      /*
        get log type:
          - missed outgoing incoming
          - lte wifi
          - video rtt
      */
      newItem.callType = this.getCallType(item);

      newItem.groupKey = new Intl.DateTimeFormat('en-US').format(item.date);
      newItem.id = this.getLogItemMainKey(newItem);
      return newItem;
    };

    this.getCallType = item => {
      let directionStr = 'outgoing';
      let radioTechStr = '';
      if (item.radioTech === 'ps') {
        radioTechStr = '_lte';
      } else if (item.radioTech === 'wifi') {
        radioTechStr = '_wifi';
      }
      if (item.direction === 'incoming') {
        if (item.duration > 0) {
          directionStr = 'incoming';
        } else {
          directionStr = 'missed';
          if (item.isRtt) {
            return directionStr + radioTechStr;
          }
        }
      }
      const videoCallStr = item.isVt ? '_videoCall' : '';
      const rttCallStr = item.isRtt ? '_rttCall' : '';
      return directionStr + videoCallStr + rttCallStr + radioTechStr;
    };
  }

  openDB = () => {
    return new Promise((resolve, reject) => {
      if (this.db) {
        resolve('DB open success!');
        return;
      }

      const req = indexedDB.open(this.DBName);

      req.onsuccess = ev => {
        console.log('DB open success!', ev.result);
        this.db = req.result;
        resolve('DB open success!');
      };

      req.onerror = error => {
        console.log('DB open failed!', error);
        reject('');
      };

      req.onblocked = () => {
        reject('');
        console.log(
          'DB is useing by other tab website, please close all and try again!'
        );
      };

      req.onupgradeneeded = event => {
        console.log('Start rebuild DB success!');
        const db = event.target.result;
        const dbStore = db.createObjectStore(this.dbStore, { keyPath: 'id' });
        dbStore.createIndex('date', 'date');

        dbStore.transaction.oncomplete = () => {
          console.log('Build DB success!');
        };
      };
    });
  };

  saveLog = item => {
    return new Promise((resolve, reject) => {
      const newItem = this.rebuildLogItem(item);
      let saveItem = null;
      /*
        item:
          {
            calls,  ^call infor
            serviceId， ^sim num
            number， ^call number
            emergency，
            duration,
            direction, ^call in/out/miss
            hangUpLocal,
            isVt,
            radioTech,
            isRtt,
            date, ^call time
            callType, ^call in/out/miss
            simNum, ^sim num
            groupKey, ^call day
            id: key ^call day + num + direction + sim num
          }
      */

      this.searchData(newItem.id).then(logItem => {
        if (logItem) {
          // existed log, updata log info
          logItem.calls = logItem.calls || [
            {
              date: logItem.date,
              duration: logItem.duration
            }
          ];

          logItem.calls.unshift({
            date: newItem.date,
            duration: newItem.duration
          });

          logItem.date = newItem.date;
          if (item.direction === 'incoming') {
            logItem.verStatus = newItem.verStatus;
          }
          console.log(logItem);
          saveItem = logItem;
        } else {
          // no existed log, save new log info
          saveItem = newItem;
        }

        this.addData(saveItem)
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    });
  };

  addData = item =>
    new Promise((resolve, reject) => {
      const dataStore = this.db
        .transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName);
      const addReq = dataStore.put(item);

      addReq.onsuccess = () => {
        console.log('Updata data success!');
        resolve();
      };

      addReq.onerror = () => {
        console.log('Updata data failed!');
        reject();
      };
    });

  getAllData = () =>
    new Promise((resolve, reject) => {
      this.openDB().then(() => {
        const dataStore = this.db
          .transaction(this.storeName)
          .objectStore(this.storeName);

        const operateReq = dataStore.getAll();

        operateReq.onsuccess = ev => {
          resolve(ev.target.result);
          console.log('Get all data success！', ev.target.result);
        };

        operateReq.onerror = () => {
          reject(null);
          console.log('Get all new data failed');
        };
      });
    });

  deleteData = items => {
    this.openDB().then(() => {
      const dataStore = this.db
        .transaction(this.storeName, 'readwrite')
        .objectStore(this.storeName);
      if (items === 'all') {
        dataStore.clear();
      } else {
        items.forEach(item => {
          dataStore.delete(item);
        });
      }
    });
  };

  searchData = mainKey =>
    new Promise((resolve, reject) => {
      this.openDB().then(() => {
        const dataStore = this.db
          .transaction(this.storeName)
          .objectStore(this.storeName);
        const searchReq = dataStore.get(mainKey);

        searchReq.onsuccess = () => {
          console.log('Search data success!', searchReq.result);
          resolve(searchReq.result);
        };

        searchReq.onerror = error => {
          console.log('Search data failed!', error);
          reject(null);
        };
      });
    });
}
