import React from 'react';
import ReactView from './main';
import A from './viewA';
import B from './viewB';
import C from './viewC';
import D from './viewD';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentViewName: 'home0'
    }
    this.deindex = 0;
  }
  
  componentDidMount(){
    console.log(this.c);
  }

  Change = () => {
    const { deindex } = this;
    if(deindex === 3){
      this.deindex = -1;
    }
    this.deindex = this.deindex + 1;
    console.log(this.deindex);
    this.setState({
      currentViewName: `home${deindex}`
    });
  }

  render(){
    const viewProps = {
      currentViewName: this.state.currentViewName,
      router: {
        home0:{
          id: 0,
          component: A,
          cacheView: 0,
          name: 'home0'
        },
        home1:{
          id: 1,
          component: B,
          cacheView: 1,
          name: 'home1'
        },
        home2:{
          id: 2,
          component: C,
          cacheView: 1,
          name: 'home2'
        },
        home3:{
          id: 3,
          component: D,
          cacheView: 0,
          name: 'home3'
        }
      }
    };
    return(
        <>
          <button ref={a => this.c = a} onClick={this.Change}>点击改变视图</button>
          <ReactView {...viewProps} />
        </>
    )
  }
}

export default Home;