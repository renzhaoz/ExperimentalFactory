import React from 'react';

import './index.css';

class ReactView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      views: {},
    }

    this.cacheView = null; // 默认没有要缓存的view 有则赋值viewName值
    this.currentView = props.currentViewName;
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
    
    /*
      更新:
        更新整个组件
          cacheView:
            - 改变name
          views多个视图更新：
            - 按key更新，若识别唯一key则重新render
        
        更新组件props:
          透传props不影响
    */
  }

  getCurrentView = () => {
    /*
      未挂载任何组件
        - cache组件
          创建新的容器，挂载cache组件
        - 非cache组件，
          创建非cache组件容器，挂载非cache组件
      已挂载该组件
        - cache组件
          # 让已渲染的组件显示
        - 非cache组件
          # 让非cache组件显示，
    */

    const { router, currentViewName } = this.props;
    const { views } = this.state;
    const {
      id,
      name:viewName,
      cacheView
    } = router[currentViewName];
    this.currentView = currentViewName;
    if(views.currentViewName){
      // 当前组件已经被渲染 则只切换
      // this.currentView = currentViewName;
    } else {
      /*
        若未被挂载
          - cache 组件
            新建
          - 非cache组件
            # 若已有组件容器则替换
            # 若没有组件容器则新建
      */

      if (router[currentViewName].cacheView === 1) {
        views[currentViewName] = {
          id,
          viewName,
          cacheView
        }
      } else {
        // 存在非cacheview 先删除再新建
        if(this.cacheView){
          delete views[this.cacheView];
          views[currentViewName] = {
            id,
            viewName,
            cacheView
          };
          this.cacheView = currentViewName;
        }else{
          // 不存在cacheview 新建
          views[currentViewName] = {
            id,
            viewName,
            cacheView
          };
          this.cacheView = currentViewName;
        }
      }
    }
    return views;
  }

  render(){
    const { currentViewName='', router } = this.props;
    console.log(currentViewName, Object.values(this.getCurrentView(currentViewName)))
    return (
      <>
        <h1>React View</h1>
        <p>React View Manager</p>
        <div className='react-view'>
          {Object.values(this.getCurrentView(currentViewName)).map(item => {
            console.log(this.currentView, item.viewName);
            return (
              <div key={item.id} style={{display: (this.currentView === item.viewName ? 'block' : 'none')}} className='show hidden'>
                {React.createElement(router[item.viewName].component)}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default ReactView;
