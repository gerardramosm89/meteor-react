import React, { Component } from 'react';
import { Players } from '../api/players';

class Player extends Component {
  render() {
    let player = this.props.player;
    return (
      <div key={player._id}>
        <p>
          {player.name} has {player.score} points.
          <button className="btn--delete btn btn-info"
          onClick={() => {
            Players.update({ _id: player._id }, { $inc: { score: 1 }});
          }}>+1</button>
          <button className="btn--delete btn btn-info"
          onClick={() => {
            Players.update({ _id: player._id }, { $inc: { score: -1 }});
          }}>-1</button>
          <button className="btn--delete btn btn-danger"
          onClick={() => {
            Players.remove({ _id: player._id });
          }}>Delete</button>
        </p>
        <div className="clearme"></div>
      </div>
    );
  }
}

export default Player;