import React, { Component } from 'react';
import { Players } from '../api/players';
class AddPlayer extends Component {
  render() {
    const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      console.log('e.target is: ', e.target);
      e.target.playerName.value = '';
      Players.insert({ name: playerName, score: 0});
      }
    }
    return (
      <div>
        <form className="form-group" onSubmit={handleSubmit.bind(this)}>
          <label>Player Name</label>
          <input className="form-control" type="text" name="playerName" placeholder="Player Name" />
          <button className="btn btn-primary">Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;