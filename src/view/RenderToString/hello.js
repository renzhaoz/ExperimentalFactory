import React from 'react';

class RenderProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'Test render to string'
        }
    }

    componentDidMount(){
        console.log('ddddddddddddddddd');
    }
    render(){
        const { name } = this.state;
        return(
            <>  
                <br/>
                <h2>{name}</h2>
                <h3>{'this is props name:' + this.props.name}</h3>
            </>
        )
    }
}

export default RenderProps;