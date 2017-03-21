import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar';
import { Router, Route, browserHistory } from 'react-router';
import Signup from '../imports/ui/shortlnk/Signup';
import NotFound from '../imports/ui/shortlnk/Notfound';
import Login from '../imports/ui/shortlnk/Login';
import { Players, calculatePlayerPositions } from './../imports/api/players';

window.browserHistory = browserHistory;

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />          
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />          
    <Route path="/scorekeep" players={positionedPlayers} component={TitleBar} />
    <Route path="*" component={NotFound} />          
  </Router>
);
players = Players.find({}, { sort: { score: -1 }}).fetch();
let positionedPlayers = calculatePlayerPositions(players);
Meteor.startup(() => {
  Tracker.autorun(() => {
      let players = Players.find({}, { sort: { score: -1 }}).fetch();
      let positionedPlayers = calculatePlayerPositions(players);
      console.log("length of positionedPlayers is: ", positionedPlayers.length);
       ReactDOM.render(routes, document.getElementById('app'));
  });
});