import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Content from './component/Content/index';


class Box extends React.Component{
  componentDidMount(){
    navigator.serviceWorker.addEventListener('message',(res)=>{
      console.log('service worker 发送消息了。', res.data)
    })
    console.log('start', Date.now());
  }
  componentDidUpdate(){
    console.log('update............')
  }
  render(){
    return(
      <Content />
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={''}>
      <Box />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
