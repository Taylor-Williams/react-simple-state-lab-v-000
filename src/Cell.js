import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: {this.props.val}
    }
  }
  render() {
    return <div className="cell" style={{backgroundColor: {state}}}></div>
  }
}

Cell.defaultProps = {
  val: "#F00"
}
