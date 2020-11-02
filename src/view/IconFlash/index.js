import React from 'react';

import './gaia-icons.css';

class Icon extends React.Component{
  render(){
    const arr = [];
    (function createArr(aru){if(aru>0){arr.push(aru);aru--;createArr(aru)}})(1000);
    console.log(arr);
    window.arr= arr;
    return(
      <ul>
        {arr.map((res,index) => {
            return(
            <li key={-index}>
              <i key={index} className='icon' data-icon='contacts' role='presentation' />
              <i key={`${index}Two`} className='icon' data-icon='call-outgoing' role='presentation' />
            </li>)
        })}
      </ul>
        
    )
  }
}

export default Icon;