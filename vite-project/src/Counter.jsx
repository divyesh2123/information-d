import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    data: []
  }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(y=>y.json())
    .then(y=>{
        this.setState({...this.state,data: y});
    })

  }

  render() {

    console.log(this.state);
    return (
      <div>Counter</div>
    )
  }
}
