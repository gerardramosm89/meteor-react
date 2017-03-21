import React, { Component } from 'react';
import ScoreApp from './ScoreApp';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../api/players';
import { Router, Route, browserHistory } from 'react-router';
class TitleBar extends Component {
    constructor(props) {
      super(props);
      console.log("Props from TitleBar constructor", props.route.player);
    }
    render () {
      //let players = this.props.route.players;
      console.log("Players from TitleBar render(): ", this.props.players);
      return (
        <div className="title-bar">
          <h1>MeteorJS</h1>
          <ScoreApp players={this.props.players}/>
        </div>
      );
    }
}

export default TitleBar;