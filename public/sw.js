self.addEventListener('install', function (event) {

  // 回调函数
  //  event.waitUntil 确保该方法中的函数会执行完毕sw才会卸载或者重装
  event.waitUntil((()=>{console.log('sssssssssss')})())
  self.importScripts('./indexDB.js')
  console.log(new DB())
  console.log('下载完成！');
  self.skipWaiting(); // 有新的sw注册时立即生效， 不用等到接管所有界面时再更新。
});

self.addEventListener('activate', function (event) {
  console.log('激活完成，此时所有的sw功能可用！');
  self.clients.claim();// 激活时就去主动控制所有的该scope下的界面。
});



self.addEventListener('message', function (event) {
  console.log(clients);
  console.log(Intl, '............')
  console.log(DB)
});
