import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import TitleBar from '../imports/ui/TitleBar';

Meteor.startup(() => {
  Tracker.autorun(() => {
    ReactDOM.render(<TitleBar />, document.getElementById('app'));
  });
});