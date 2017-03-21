import React, { Component } from 'react';
import ScoreApp from './ScoreApp';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../api/players';

class TitleBar extends Component {
    super(){
      
    }
    render () {
      players = Players.find({}, { sort: { score: -1 }}).fetch();
      let positionedPlayers = calculatePlayerPositions(players);
      return (
        <div className="title-bar">
          <h1>MeteorJS</h1>
          <ScoreApp players={this.props.players}/>
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