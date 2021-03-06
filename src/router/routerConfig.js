// import React from 'react';

// // this file for replace modules and set router config
// // 使用React lazy 和import 依赖加载 组件

// const Home = React.lazy(() => import('../view/Home'));
// const HOC = React.lazy(() => import('../view/HOC'));
// const RenderToString = React.lazy(()=>import('../view/RenderToString'));
// const RenderProps = React.lazy(() => import('../view/RenderProps'));
// const IconFlash = React.lazy(() => import('../view/IconFlash'));
// const ServerWorker = React.lazy(() => import('../view/ServerWorker'));
// const IndexDB = React.lazy(() => import('../view/IndexDB'));
// const ReactWindow = React.lazy(() => import('../view/ReactWindow'));
// const ReactView = React.lazy(() => import('../view/ReactView'));
// const HTML5 = React.lazy(() => import('../view/HTML5'));
// const ReactBase = React.lazy(() => import('../view/ReactBase'));

// // 对象key和name path中的值保持一致
// export default {
//     home:{
//         name:'home',
//         component: Home,
//         type:'',
//         path:'home'
//     },
//     hoc:{
//         name:'hoc',
//         component: HOC,
//         type:'',
//         path:'hoc'
//     },
//     renderToString:{
//         name:'renderToString',
//         component: RenderToString,
//         type:'',
//         path:'renderToString'
//     },
//     renderProps:{
//         name:'renderProps',
//         component: RenderProps,
//         type:'',
//         path:'renderProps'
//     },
//     IconFlash:{
//         name:'IconFlash',
//         component: IconFlash,
//         type:'',
//         path:'IconFlash'
//     },
//     ServerWorker:{
//         name:'ServerWorker',
//         component: ServerWorker,
//         type:'',
//         path:'ServerWorker'
//     },
//     IndexDB:{
//         name:'IndexDB',
//         component: IndexDB,
//         type:'',
//         path:'IndexDB'
//     },
//     ReactWindow:{
//         name:'ReactWindow',
//         component: ReactWindow,
//         type:'',
//         path:'ReactWindow'
//     },
//     ReactView:{
//         name:'ReactView',
//         component: ReactView,
//         type:'',
//         path:'ReactView'
//     },
//     HTML5:{
//         name:'HTML5',
//         component: HTML5,
//         type:'',
//         path:'HTML5'
//     },
//     ReactBase:{
//         name:'ReactBase',
//         component: ReactBase,
//         type:'',
//         path:'ReactBase'
//     }
// };

import React from 'react';

import views from './viewsConfig';

const routerConfig = {};

views.forEach(i => {
    routerConfig[i] = {
        name: i,
        component: React.lazy(() => import(`../view/${i}`))
    }
})

console.log(routerConfig);

export default routerConfig