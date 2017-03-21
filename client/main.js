import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar';
import { Router, Route, browserHistory } from 'react-router';
import Signup from '../imports/ui/shortlnk/Signup';
import NotFound from '../imports/ui/shortlnk/Notfound';
import Login from '../imports/ui/shortlnk/Login';

Meteor.startup(() => {
  Tracker.autorun(() => {
      const routes = (
        <Router history={browserHistory}>
          <Route path="/" component={Login} />          
          <Route path="/signup" component={Signup} />
          <Route path="/scorekeep" component={TitleBar} />
          <Route path="*" component={NotFound} />          
        </Router>
      );
    ReactDOM.render(routes, document.getElementById('app'));
  });
});