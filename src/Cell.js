import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.val
    }
  }
  touch = () => {
    this.setState{{
      color: "#FFF"
    }}
  }
  render() {
    return <div className="cell" onClick={this.touch} style={{backgroundColor: {this.state.color}}}></div>
  }
}

Cell.defaultProps = {
  val: "#F00"
}
