import React from 'react';

import './index.css';
class Icon extends React.Component {
  render() {
    return (
      <ul>
        <ol className="icon-font addContent call-sim2"></ol>
        <ol className="icon-font Unicode">&#xf180;</ol>
        <ol className='icon-font' data-icon='contacts'></ol>
      </ul>
    )
  }
}

export default Icon;