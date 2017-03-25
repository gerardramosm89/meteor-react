import React, { Component } from 'react';
import { Players } from '../api/players';
class AddPlayer extends Component {
  render() {
    const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    // if (playerName) {
    //   console.log('e.target is: ', e.target);
    //   e.target.playerName.value = '';
    //   Players.insert({ name: playerName, score: 0});
    //   }
    if (playerName) {
      // Links.insert({ url, userId: Meteor.userId() });
      // Removed old insert
      Meteor.call('players.insert', playerName, 0, (err, res) => {
        if (err) {
          console.log("worked just fine!");
        }
        if (!err) {
          e.target.playerName.value = '';
        }
      });
    }

    }
    return (
      <div className="item">
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