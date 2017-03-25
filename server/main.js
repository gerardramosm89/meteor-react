import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import { Links } from '../imports/api/links';
import '../imports/api/users';
import '../imports/startup/simple-schema-configuration';

Meteor.startup(() => {

  WebApp.connectHandlers.use((req, res, next) => {
    let _id = req.url.slice(1);
    let link = Links.findOne({ _id });
    if (link) {
      console.log("link found: link is", link);
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.end();
      Meteor.call('links.trackVisit', _id);
    } else {
      next();
    }
  });

});