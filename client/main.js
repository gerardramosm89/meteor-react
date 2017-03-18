import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import Player from '../imports/ui/Player';

const renderPlayers = (playersList) => {
  return playersList.map(player => {
    return <Player key={player._id} player={player} />;
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    players = Players.find().fetch();
    let jsx = (
      <div className="col-xs-6 col-xs-offset-3">
        <TitleBar title="MeteorJS" />
        <h1>
          This is from main.js {name}
        </h1>
        { renderPlayers(players) }
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });

  // Insert new doc into players collection

});