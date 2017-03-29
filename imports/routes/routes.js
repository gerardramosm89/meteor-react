// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Router, Route, browserHistory } from 'react-router';
import { Session } from 'meteor/session';

// UI
import TitleBar from '../ui/TitleBar';
import Signup from '../ui/shortlnk/Signup';
import NotFound from '../ui/shortlnk/Notfound';
import Login from '../ui/shortlnk/Login';
import Link from '../ui/shortlnk/Link';
import Dashboard from '../ui/shortlnk/Dashboard';

// Api Calls
import { Players, calculatePlayerPositions } from './../api/players';

// Variables
const unauthenticatedPages = ['/', '/signup', '/login'];
const authenticatedPages = ['/links'];

// Auth Guards
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    //browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/login');
  }
};

const onEnterNotePage = (nextState) => {
  if (!Meteor.userId()) {
    browserHistory.replace('/login');
  } else {
    console.log(nextState);
    Session.set('selectedNoteId', nextState.params.id);
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isAuthenticatedPage && !isAuthenticated) {
    console.log("log in");
    browserHistory.replace('/login');
  } else if (isUnauthenticatedPage && isAuthenticated) {
    //browserHistory.replace('/links');
  }
};

export const globalOnChange = (prevState, nextState) => {
  console.log('globalOnChange');
  globalOnEnter(nextState);
}

export const globalOnEnter = (nextState) => {
  console.log('globalonEnter was called');
  const lastRoute = nextState.routes[nextState.routes.length - 1];
  Session.set('currentPagePrivacy', lastRoute.privacy);

}
export const routes = (
  <Router history={browserHistory}>
    <Route onEnter={globalOnEnter} onChange={globalOnChange}>
      <Route path="/" component={Login} privacy="unauth"/>          
      <Route path="/dashboard" component={Dashboard} privacy="auth" onEnter={onEnterPrivatePage}/>    
      <Route path="/dashboard/:id" component={Dashboard} privacy="auth" onEnter={onEnterNotePage}/>    
      <Route path="/signup" component={Signup} privacy="unauth" onEnter={onEnterPublicPage}/>
      <Route path="/login" component={Login} privacy="unauth" onEnter={onEnterPublicPage}/>
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>         
      <Route path="/scorekeep" component={TitleBar} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);