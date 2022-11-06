import React, { Component } from 'react';
import WithCounter from "./WithCounter"
class HoverCounter extends Component {
  render() {
    return (
      <h1 onMouseOver={this.props.incrementCount}>
        Hover {this.props.count} {this.props.name} times
      </h1>
    );
  }
}

export default WithCounter(HoverCounter);
