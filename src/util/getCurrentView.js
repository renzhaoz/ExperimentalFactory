// 路由切换的方法
import routerConfig from '../router/routerConfig';

// 根据hash信息 动态load组件
const changeView = () => {
    const bowerHash = window.location.hash.split('#')[1] || '';
    let viewName = 'home'

    if(!routerConfig[bowerHash] || bowerHash === ''){
        // no such view

    } else if(routerConfig[bowerHash]) {
        // find right view
        // view = routerConfig[bowerHash].component;
        viewName = routerConfig[bowerHash].name

    } else {
        // other
    }
    console.log('Component rendering named：', viewName);
    return viewName;
}

export default changeView;
