import React from 'react';
import './index.css';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    import('./a.css').then(res => {
      console.log(res);
    }).catch(err => { console.log(err); })
  }

  changeFocus = (e) => {
    // e.target.focus()
    console.log(e);
  };

  componentDidMount() {
    document.querySelector('.ff').focus();
    document.querySelector('#cover').style.display = 'none';
  }

  render() {
    return (
      <div id='demo'>
        <h1>Demo</h1>
        <div id='cover' />
        <div tabindex="0" ref={ref => this.aa = ref} onClick={this.changeFocus} className='ff'>fffffffffffffffffff</div>
      </div>
    )
  }
}