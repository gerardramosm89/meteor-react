import React, { Component } from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component {
  renderPlayer(players) {

    if (players.length === 0) {
      return (
        <div className="item">
          <h2 className="item__message text-center">Please enter a player</h2>
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
        <h1 className="text-center playerlist--header">Player List</h1>
        <FlipMove easing="cubic-bezier(0, 0.7, 0.5, 0.1)"
        maintainContainerHeight={true}>
          {this.renderPlayer(this.props.players)}
        </FlipMove>
      </div>
    );
  }
}