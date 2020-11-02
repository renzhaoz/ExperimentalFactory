import React from 'react';
import Menu from '../../component/Menu/index';
import App from '../../App';


class Home extends React.Component{
    render(){
        return(
            <>
                <App/>
                <Menu/>
            </>
        )
    }
}

export default Home;