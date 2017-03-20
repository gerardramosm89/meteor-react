import React, { Component } from 'react';
import AddPlayer from './AddPlayer';
import Player from './Player';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title="MeteorJS" />
        <div className="col-xs-6 col-xs-offset-3">
          <PlayerList players={players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
};