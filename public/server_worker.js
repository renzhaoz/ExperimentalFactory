if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('注册完成', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('注册失败', err);
    });
  });
}