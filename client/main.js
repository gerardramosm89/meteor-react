import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

// const players = [{
//   _id: '1',
//   name: "Gerry",
//   score: 99
// },{
//   _id: '2',
//   name: "Chris",
//   score: 2
// },{
//   _id: '3',
//   name: "Theresa",
//   score: 3
// }];

const renderPlayers = (playersList) => {
  return playersList.map(player => {
    return <p key={player._id}>{player.name} has {player.score} points.</p>
  });
};

const handleSubmit = function (e) {
  let playerName = e.target.playerName.value;
  e.preventDefault();

  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({ name: playerName, score: 0})
  }
};

Meteor.startup(function () {
  // title -> Account Settings
  Tracker.autorun(function() {
    players = Players.find().fetch();
    let jsx = (
      <div>
        <p>
          This is from main.js {name}
        </p>
        { renderPlayers(players) }
        <form onSubmit={handleSubmit}>
          <label>Player Name</label>
          <input type="text" name="playerName" placeholder="Player Name" />
          <button >Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  // Insert new doc into players collection

});