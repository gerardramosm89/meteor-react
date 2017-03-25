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
        label: "Your entry",
        regEx: SimpleSchema.RegEx.Url
      }
    }).validate({ url });

    Links.insert({
      _id: shortid.generate(),
      url,
      userId: this.userId,
      visible: true,
      visitedCount: 0,
      lastVisitedAt: null
    })
  },
  'links.setVisibility'(_id, visible) {
    if (!this.userId) {
      throw new Meteor.Error('not authorized');
    }
    new SimpleSchema({
        _id: { type: String, min: 1 },
        visible: { type: Boolean }
    }).validate({ _id, visible });

    Links.update({ 
      _id,
      userId: this.userId
    }, {
      $set: {
        visible: visible
      }
    });
  }
});