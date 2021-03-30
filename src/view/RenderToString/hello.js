import React from 'react';

window.localStorage.aa = 'aa';
class RenderProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: window.localStorage.aa
        }
    }

    reRender = () => {
        this.setState({
            name: 'click............'
        }, () => {
            localStorage.aa = 'QQQQQQQQQQQQQQQQQQQQQQQQ'
        });
    }

    render(){
        console.log('render...........')
        const { name } = this.state;
        return(
            <>  
                <br/>
                <h2>Render To String {name}</h2>
                <h3 onClick={this.reRender} >'HHHHHHHHHHHHHHHH'</h3>
            </>
        )
    }
}

export default RenderProps;