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
import Link from '../imports/ui/shortlnk/Link';

const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/login');
  }
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />          
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>         
    <Route path="/scorekeep" players={positionedPlayers} component={TitleBar} />
    <Route path="*" component={NotFound} />          
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);  
  console.log('isAuthenticated', isAuthenticated);

  if (isAuthenticatedPage && !isAuthenticated) {
    console.log("log in");
    browserHistory.replace('/login');
  } else if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/links');
  }
});

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