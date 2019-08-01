import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#F00"
    }
  }
  render() {
    return
  }
}

Cell.defaultProps = {
  val: "#F00"
}
