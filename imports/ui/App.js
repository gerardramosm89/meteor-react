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
        <div className="col-xs-4 col-xs-offset-4">
          <PlayerList players={players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
};