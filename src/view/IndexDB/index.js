import React from "react";

const DBName = "demo1233332323";
const version = 1;
const DBBaseName = 'gril1333223232323';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '0'
    };
  }

  componentDidMount() {
    let req = indexedDB.open(DBName, version);
    let that = this;

    req.onsuccess = function (ev) {
      console.log('open indexed success!')
      // 这里的this指向req对象。
      that.db = ev.target.result;
      console.log("打开仓库成功", that.db);
      // 关闭方法 db.close();
      // 也有clear方法不过是在objectStore方法返回的对象上调用。
    };

    req.onerror = function (evt) {
      console.error("打开仓库失败", evt);
    };

    req.onupgradeneeded = function (ev) {
      console.log('onupgradeneeded success!')
      // 创建新数据库 打开高版本数据库时调用
      console.log("openDb.onupgradeneeded....................");
      // 创建新表
      var store = ev.target.result.createObjectStore(DBBaseName, {
        keyPath: "id",
        autoIncrement: true,
      });

      // 创建新的索引
      store.createIndex("name", "name", { unique: false });
      store.createIndex("age", "age", { unique: false });
      store.createIndex("tel", "tel", { unique: false });
      store.createIndex("date", "date", { unique: false });
      store.createIndex("email", "email", { unique: false });

      // 创建表和索引完成的事件回调
      store.transaction.oncomplete = () => {
        console.log('创建新表及索引完成。')
      }
    };
  }

  index = 0;

  saveData = () => {
    console.log(this.db);
    this.index = this.index + 1;
    const request = this.db.transaction([DBBaseName], 'readwrite').objectStore(DBBaseName)
      .add({ id: Date.now(), name: '闫妮', date: 1, age: "38", tel: "119", email: "unknow" });
    request.onsuccess = function (ev) {
      console.log(ev);
      console.log("数据添加成功。");
    };
    request.onerror = function (ev) {
      console.log("数据添加失败。", ev.target.error);
    };
  };

  getAllData = () => {
    const dataStore = this.db.transaction(DBBaseName).objectStore(DBBaseName);
    dataStore.getAll().onsuccess = (ev) => {
      console.log(ev.target.result);

      const sss = this.db.transaction(DBBaseName, 'readwrite').objectStore(DBBaseName).put({ id: Date.now(), name: '闫妮', age: "38", tel: "119", email: "unknow" })
      sss.onsuccess = () => {
        console.log(1111111111111111111)
      }

      sss.onerror = (error) => {
        console.log(error, 'sssssssssssssssssssss')
      }
    }
  }

  getAllData_1 = () => {
    console.log(111111111111111)
    this.db.transaction(DBBaseName).objectStore(DBBaseName).openCursor().onsuccess = (ev) => {
      console.log(ev.target.result);
      if (ev.target.result) {
        // 循环完所有数据后返回的ev.target.result值为null所以要在这里判断
        // ev.target.result.value是该条数据对象，但是对象是懒挂载的，在这里访问value会有性能问题
        // ev.target.result.key/primaryKey值是该条数据对象的主键
        // ev.target.result.source IDBObjectStore对象
        ev.target.result.continue();
      }
    };
  }

  closeDB = () => {
    this.db.close();
    alert('仓库已关闭');
  }

  searchDB = () => {
    const req = this.db.transaction(DBBaseName, 'readwrite').objectStore(DBBaseName).get(this.state.value);
    req.onsuccess = (ev) => {
      console.log(ev)
    }

    req.onerror = (error) => {
      console.log(error)
    }
  }

  clearDataBase = () => {
    const request = this.db.transaction(DBBaseName, 'readwrite').objectStore(DBBaseName).clear();
    request.onerror = (ev) => {
      console.log('清除表数据失败', ev);
    }
    request.onsuccess = (ev) => {
      console.log('清除表数据成功', ev)
    }
  }

  delete = () => {
    const keyRange = IDBKeyRange.only(2, 3, 4, 5)
    const r = this.db.transaction(DBBaseName, 'readwrite').objectStore(DBBaseName);
    const req = r.delete(keyRange);
    req.onsuccess = (res) => {
      console.log(res)
    }
  }

  searchDBYanNi = () => {
    const store = this.db.transaction(DBBaseName, 'readwrite').objectStore(DBBaseName);
    const index = store.index('date').openCursor();
    index.onsuccess = (res) => {
      console.log(res)
    }
  }

  render() {
    return (
      <>
        <h2>存储数据</h2>
        <button onClick={this.saveData}>新建一条数据数据</button>
        <button onClick={this.getAllData}>使用getAll获取所有的数据</button>
        <button onClick={this.getAllData_1}>使用openCursor游标循环获取所有的数据</button>
        <button onClick={this.delete}>删除一个或者多个</button>
        <button onClick={this.clearDataBase}>清理仓库中的此数据表</button>
        <button onClick={this.closeDB}>关闭该仓库</button>
        <input type='text' onChange={(ev) => { this.setState({ value: ev.target.value }) }} value={this.state.value} />
        <button onClick={this.searchDB}>搜索该仓库</button>
        <button onClick={this.searchDBYanNi}>查询name为闫妮</button>
      </>
    );
  }
}
