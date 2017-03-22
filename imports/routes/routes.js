import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../ui/TitleBar';
import { Router, Route, browserHistory } from 'react-router';
import Signup from '../ui/shortlnk/Signup';
import NotFound from '../ui/shortlnk/Notfound';
import Login from '../ui/shortlnk/Login';
import { Players, calculatePlayerPositions } from './../api/players';
import Link from '../ui/shortlnk/Link';

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
export const onAuthChange = (isAuthenticated) => {
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
};

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login} />          
    <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path="/login" component={Login} onEnter={onEnterPublicPage}/>
    <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>         
    <Route path="/scorekeep" component={TitleBar} />
    <Route path="*" component={NotFound} />          
  </Router>
);