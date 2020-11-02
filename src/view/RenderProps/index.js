import React from 'react';
import MousePostion from './Mouse';

class RenderProps extends React.Component{
    render(){
        return(
            <>
                <h1>{'Render Props'}</h1>
                <MousePostion
                    render={(param) => (
                        <div style={{height:'600px'}}>我是公用组件渲染的子组件</div>
                    )}
                />
            </>
        )
    }
}

export default RenderProps;