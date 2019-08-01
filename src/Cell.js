import React, { Component } from 'react';

export default class Cell extends Component {
  constructor() {
    super()
    this.value |= "#F00"
  }
  render() {
    return
  }
}

Cell.defaultProps = {
  val: "#F00"
}
