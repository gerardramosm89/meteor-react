import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';
export const Players = new Mongo.Collection('players');

if (Meteor.isServer) {
  Meteor.publish('players', function () {
    return Players.find({});
  });
}

Meteor.methods({
  'players.insert'(name, score) {
    Players.insert({
      // _id: shortid.generate(),
      name,
      score,
      userId: this.userId
    })
  }
});
export const calculatePlayerPositions = (players) => {
  let rank = 1;

  return players.map((player, index) => {
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o')
    }
  });
};