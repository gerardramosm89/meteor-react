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
import { routes, onAuthChange } from '../imports/routes/routes';
import { Links } from '../imports/api/links';
import '../imports/startup/simple-schema-configuration';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  if (selectedNoteId) {
    browserHistory.replace(`/dashboard/${selectedNoteId}`);    
  }
});

Meteor.startup(() => {
  Session.set('showVisible', true);    
  ReactDOM.render(routes, document.getElementById('app'));
});