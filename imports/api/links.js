import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  console.log("publishing from links");
  Meteor.publish('links', () => {
    return Links.find();
  });
}