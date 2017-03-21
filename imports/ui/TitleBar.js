import React, { Component } from 'react';
import ScoreApp from './ScoreApp';

class TitleBar extends Component {
  render () {
    return (
      <div className="title-bar">
        <h1>MeteorJS</h1>
        <ScoreApp />
      </div>
    );
  }
}

export default TitleBar;