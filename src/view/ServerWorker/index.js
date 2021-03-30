import React from 'react';
// import './server_worker';

class ServerWorker extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    setTimeout(navigator.serviceWorker.addEventListener('message', () => {
      console.log('MSG..................')
    }), 3000);
  }

  render(){
    return (
      <>
        <h1>Server Worker</h1>
        <ol>
          <li>
            Service Worker 被浏览器在其自己的全局脚本上下文环境中执行。这意味着你不能直接访问页面中的 DOM 元素。因此，需要一个间接的方式来让 Service Worker 与它控制的页面进行通信。这个可以通过使用 postMessage 接口来实现。
          </li>
          <li>
            除了在 localhost 下运行时，Service Worker 只能运行在 HTTPS 协议下。
          </li>
          <li>
            Service Worker 不限于特定的页面，因此可以被重复使用。
          </li>
          <li>
            Service Worker 是事件驱动的。这意味着一旦它们运行结束就不能保留任何信息。为了访问先前状态的信息，你需要使用 IndexedDB API。
          </li>
          <li>
            Create-react-app本身集成了server-worker,仅限与生产环境使用，详见index.js入口文件或者搜索serviceWorker.js。
          </li>
        </ol>
      </>
    )
  }
}

export default ServerWorker;
