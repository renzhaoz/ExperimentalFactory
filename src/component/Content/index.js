import React from 'react';
import changeView from '../../util/getCurrentView';
import routerConfig from '../../router/routerConfig';
import './index.css';

class ViewBox extends React.Component{
    constructor(props){
        super(props);
        console.log('ViewBox')
        this.state={
            viewName: window.sessionStorage.viewId || 'Home'
        }
    }

    componentDidMount(){
        window.addEventListener('hashchange',()=>{
            const { viewName } = this.state;
            const newViewName = changeView();
            if (viewName !== newViewName) {
                window.sessionStorage.viewId = newViewName;
                this.setState({
                    viewName: newViewName
                })
            }
        })
    }

    back = () => {
        window.history.back(-1)
    }

    render(){
        const { viewName } = this.state;
        console.log(viewName, routerConfig[viewName])
        return(
            <div className={`${viewName} content`}>
                {viewName !== 'Home' && <div onClick={this.back} className='back'>Back</div>}
                {React.createElement(routerConfig[viewName].component)}
            </div>
        )
    }
}

export default ViewBox;