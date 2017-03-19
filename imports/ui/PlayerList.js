import React, { Component } from 'react';
import Player from './Player';

export default class PlayerList extends Component {
  renderPlayer(players) {

    if (players.length === 0) {
      return (
        <div>
          <h2 className="text-center">Please enter a player</h2>
        </div>
      );
    } else {
      return players.map((player) => {
        return <Player key={player._id} player={player} />
      });
    }
  }
  render (){
    return(
      <div>
        <h1>Player List</h1>
        {this.renderPlayer(this.props.players)}
      </div>
    );
  }
}