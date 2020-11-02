import React from 'react';
import RenderServer from 'react-dom/server';
import Hello from './hello';

class RenderProps extends React.Component{
    componentDidMount(){
            // console.log(res.default);
            console.log('sssssssssss');
            const e = RenderServer.renderToString(<Hello name='渲染静态组件to字符串，使用dom方法挂载' />);
            console.log(e);
            document.querySelector('.warp').innerHTML = e;
    }

    render(){
        return(
            <div className='box' style={{overflow:'auto'}}>
                <p className='xx'>xxxxxxxx</p>
                <h5>Here are real React Compoennt render!</h5>
                <Hello name='组件挂载渲染' />

                <h5>Here are Render To String First!</h5>
                <div className='warp'>

                </div>
            </div>
        )
    }
}

export default RenderProps;