import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.value |= "#F00"
  }
  render() {
    return
  }
}

Cell.defaultProps = {
  val: "#F00"
}
