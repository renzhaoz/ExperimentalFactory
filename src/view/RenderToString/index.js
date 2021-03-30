import React from 'react';
import RenderServer from 'react-dom/server';
import Hello from './hello';

window.localStorage.aaa = 'default aaa';

class RenderProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            aaa: localStorage.aaa
        }
    }
    componentDidMount(){
            // console.log(res.default);
            console.log('sssssssssss');
            window.aa = this.renderToString1;
    }

    renderToString1 = () => {
        const ss= RenderServer.renderToString(<Hello  />);
        console.log(ss);
    }

    render(){
        return(
            <div className='box' style={{overflow:'auto'}}>
                <p className='xx'>xxxxxxxx</p>
                <h5>Here are real React Compoennt render!</h5>
                <Hello />

                <h5>Here are Render To String First!</h5>
                <div className='warp'>

                </div>
            </div>
        )
    }
}

export default RenderProps;