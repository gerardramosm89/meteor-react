import React, { Component } from 'react';
import { Players } from '../api/players';

class Player extends Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;

    let player = this.props.player;
    return (
      <div key={player._id} className={itemClassName}>
        <div>
          <div className="player__stats">
            {this.props.player.rank} {this.props.player.position}
          </div>
          {player.name} has {player.score} points.
          <span className="clearme"></span>          
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
        </div>
        <div className="clearme"></div>
      </div>
    );
  }
}

export default Player;