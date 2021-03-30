import React from 'react';
import Menu from '../../component/Menu/index';
import App from '../../App';


class Home extends React.Component{
    render(){
        return(
            <>
                <App/>
                <Menu ref={(re)=>{ this.c = re;console.log(123)}}/>
            </>
        )
    }
}

export default Home;