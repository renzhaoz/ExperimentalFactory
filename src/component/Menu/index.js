import React from 'react';
import router from '../../router/routerConfig';
import './index.css'

class Menu extends React.Component{
    menuClick = (item) => {
        window.location.hash = item;
    }

    render(){
        const menus = Object.keys(router);
        console.log(menus)
        return(
            <ol className='warp'>
                {
                    menus.map((item,index) => (
                        <li key={index} onClick={() => {this.menuClick(item)}} className='item'>{item}</li>
                    ))
                }
            </ol>
        )
    }
}

export default Menu;