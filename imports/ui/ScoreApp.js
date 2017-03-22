import React, { Component } from 'react';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import { Players, calculatePlayerPositions } from './../api/players';


export default class ScoreApp extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-6 col-xs-offset-3">
          <PlayerList />
          <AddPlayer />
        </div>
      </div>
    );
  }
};