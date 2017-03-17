import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const renderPlayers = (playersList) => {
  return playersList.map(player => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} points.
        <button className="btn btn-danger"
        onClick={() => {
          Players.remove({ _id: player._id });
        }}>Delete</button>
      </p>
    );
  });
};

const handleSubmit = (e) => {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    console.log('e.target is: ', e.target);
    e.target.playerName.value = '';
    Players.insert({ name: playerName, score: 0})
  }
};

Meteor.startup(() => {
  // title -> Account Settings
  Tracker.autorun(() => {
    players = Players.find().fetch();
    let jsx = (
      <div className="col-xs-6 col-xs-offset-3">
        <h1>
          This is from main.js {name}
        </h1>
        { renderPlayers(players) }
        <form className="form-group" onSubmit={handleSubmit}>
          <label>Player Name</label>
          <input className="form-control" type="text" name="playerName" placeholder="Player Name" />
          <button className="btn btn-primary">Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  // Insert new doc into players collection

});