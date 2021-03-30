import React from 'react';

import './style.css'

export default class A extends React.Component {
  constructor(props){
    super(props);

    window.addEventListener('xxx', (e) => {console.log('e', 'xxx')});
    window.xxx = () => {console.log('window.xxx', 123123)}
  }

  componentDidMount(){
    window.dispatchEvent(new CustomEvent('xxx'));
  }

  render(){
    return(
      <>
        <br/><br/><br/>
        <div className='xxx'><div><div>
          <p>xxx</p>
          <h1 className='h11'>
            HTML5基础
          </h1>
        </div></div></div>

      </>
    )
  }
}