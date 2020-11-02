const openDB = (DBName, version) => new Promise((resolve,reject) => {
  console.log("openDb ...");
  var req = indexedDB.open(DBName, version);
  req.onsuccess = function (evt) {
    // Better use "this" than "req" to get the result to avoid problems with
    // garbage collection.
    // db = req.result;
    const db = this.result;
    console.log("openDb DONE", req);
    resolve(db);
  };
  req.onerror = function (evt) {
    console.error("openDb:", evt.target.errorCode);
    reject('open error');
  };

  req.onupgradeneeded = function (evt) {
    console.log("openDb.onupgradeneeded....................");
    var store = evt.currentTarget.result.createObjectStore('DBName', {
      keyPath: "id",
      autoIncrement: true,
    });

    store.createIndex("name", "name", { unique: true });
    store.createIndex("age", "age", { unique: true });
    store.createIndex("tel", "tel", { unique: false });
    store.createIndex("email", "email", { unique: false });
  };
});

export default openDB;