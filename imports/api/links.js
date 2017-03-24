import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
export const Links = new Mongo.Collection('links');
import shortid from 'shortid';

if (Meteor.isServer) {
  Meteor.publish('links', function () {
    return Links.find({ userId: this.userId });
  });
}

Meteor.methods({
  'links.insert'(url){
    if (!this.userId) {
      throw new Meteor.Error('not authorized');
    }


    new SimpleSchema({
      url: {
        type: String,
        label: "Your garbage",
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId
    })
  }
});