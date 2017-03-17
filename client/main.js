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
    console.log(player);
    return <p key={player._id}>{player.name} has {player.score} points.</p>
  });
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
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
  Players.insert({
    name: "Gerry",
    score: 23
  });
  // Insert new doc into players collection

});