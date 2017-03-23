import React, { Component } from 'react';
import ScoreApp from './ScoreApp';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../api/players';
import { Router, Route, browserHistory } from 'react-router';
class TitleBar extends Component {
    constructor(props) {
      super(props);
    }
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