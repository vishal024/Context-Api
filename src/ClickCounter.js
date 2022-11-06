import React, { Component } from 'react';
import WithCounter from './WithCounter';
class ClickCounter extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCount}>
        clicked {this.props.count} {this.props.name} times
      </button>
    );
  }
}

export default WithCounter(ClickCounter);
