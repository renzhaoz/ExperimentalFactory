import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Content from './component/Content/index';


class Box extends React.Component{
  constructor(props){
    super(props);
    window.onload = () => {
      console.log(1111111111111);
    }
  }

  componentDidMount(){
    window.onload = () => {
      console.log(1111111111111);
    }
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
  // <React.StrictMode>
    <React.Suspense fallback={''}>
      <Box />
    </React.Suspense>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
