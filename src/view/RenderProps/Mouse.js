import React from 'react';

class RenderProps extends React.Component{
    constructor(props){
      super(props);
      this.state={
        color:'red'
      }
    }

    changeColor = () => {
      document.body.style.background = this.method3();
    }

    method3 = () => {
			return "#"+(function(color){
				return new Array(7-color.length).join("0")+color;
			})((Math.random() * 0x1000000 | 0).toString(16));
		}



    render(){
        return(
            <div onClick={this.changeColor}>
                <h1>{'这是公共能力组件，在次组件内任意点击会切换背景色'}</h1>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default RenderProps;