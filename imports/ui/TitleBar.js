import React, { Component } from 'react';
import ScoreApp from './ScoreApp';
import { Meteor } from 'meteor/meteor';

class TitleBar extends Component {

    render () {
      return (
        <div className="title-bar">
          <h1>MeteorJS</h1>
          <ScoreApp />
        </div>
      );
    }

  /*render () {
    return (
      <div className="title-bar">
        <h1>MeteorJS</h1>
        <ScoreApp />
      </div>
    );
  }*/
}

export default TitleBar;