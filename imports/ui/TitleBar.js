import React, { Component } from 'react';

class TitleBar extends Component {
  render () {
    return (
      <div className="text-center">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default TitleBar;