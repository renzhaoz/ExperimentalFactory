
self.addEventListener('install', function (event) {
  console.log('Service Worker install success, 下载完成！');
  // 回调函数
  event.waitUntil(() => {
    console.log('安装完成后的回调函数');
  });
});

self.addEventListener('message', function (event) {
  if ( this.clients ){
    
  event.waitUntil(
        this.clients.matchAll().then ( (client) => {
            client.forEach(clientList=>{
              console.log('do it')
              clientList.postMessage({
                msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
                source: 'service-worker'
              })
            })  
        })
    )
  }
});
