import React from 'react';
import './index.css'
class HOC extends React.Component{
    render(){
        return(
            <div className='page_hoc' >
                <iframe title='bd' className='main_hoc' style={{width: '100%', height: '100%'}}  src='https://www.baidu.com'></iframe>
            </div>
        )
    }
}

export default HOC;