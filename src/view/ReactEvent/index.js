import React from 'react';

export default class A extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const dom = document.getElementById('root');
    dom.addEventListener('click', e => {
      console.log(e, 'fffffffffffffff');
      e.stopPropagation(); // 阻止原生事件和react事件的调用和传递
      // e.preventDefault();
      // e.stopImmediatePropagation();
    })
  }

  handing = (ev) => {
    // ev.stopPropagation(); //  终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播
    ev.preventDefault(); //  取消事件的默认动作
    // ev.nativeEvent.stopPropagation();
    // ev.nativeEvent.stopImmediatePropagation();
    // return false 在DOM0级事件中，可以像event.preventDefault() 取消默认事件，但是在DOM2级则不行
    console.log('clock');
  }

  titleClick = (ev) => {
    ev.stopPropagation(); // 阻止冒泡
    // ev.nativeEvent.preventDefault(); // 没有任何作用？
    // ev.nativeEvent.stopPropagation(); // 没有任何作用 ?
    // ev.nativeEvent.stopImmediatePropagation();// 没有任何作用 ?

    console.log('title Click');
  }

  render() {
    return (<div onClick={this.handing}>
      <h1 onClick={this.titleClick}>React-Event</h1>
    </div>)
  }
}