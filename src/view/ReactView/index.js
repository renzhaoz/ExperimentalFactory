import React from 'react';

import './index.css';

class ReactView extends React.Component{
  constructor(props){
    super(props);
    this.state={}
  }


  viewChange = () => {
      /*
        entry:
          componentName
        out:
          - 如果目前的view容器中没有相关视图
            - 不能注销的视图
              # 创建一个用于展示视图的容器，挂载组件内容
            - 可以注销的视图
              # 创建一个用于显示视图的容器，挂载组件内容

          - 如果目前的view容器中拥有该视图
            - 能注销的视图
              # 直接切换容器内容
            - 不能注销的视图(保留页面操作状态)
              # 有隐藏的组件则展示
              # 没有隐藏的组件则隐藏当前的视图，创建一个新的容器展示组件内容
      */
    const { router } = this.props;
    router.forEach(item => {
      if (item.cache === 1) {
        // 缓存界面
        
      } else {
        // 不缓存界面
      }
    });
  }


  render(){
    return (
      <>
        <h1>React View</h1>
        <p>React View Manager</p>
        <div className='react-view'>

        </div>
      </>
    )
  }
}

export default ReactView;
