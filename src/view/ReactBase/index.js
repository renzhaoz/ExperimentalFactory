import React from 'react';
import axios from 'axios';
import { aa } from './a'

console.log(aa)
class RenderProps extends React.Component {
  componentDidMount() {
    axios.get('/README.md').then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <>
        <h1>{'Render Props'}</h1>
      </>
    )
  }
}

export default RenderProps;