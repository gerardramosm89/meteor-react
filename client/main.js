import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import Player from '../imports/ui/Player';
import PlayerList from '../imports/ui/PlayerList';
import ScoreApp from '../imports/ui/ScoreApp';

Meteor.startup(() => {
  Tracker.autorun(() => {
    players = Players.find({}, { sort: { score: -1 }}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    ReactDOM.render(<TitleBar players={positionedPlayers} />, document.getElementById('app'));
  });
});