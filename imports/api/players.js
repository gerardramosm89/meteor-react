import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';
export const Players = new Mongo.Collection('players');

if (Meteor.isServer) {
  console.log("publishing players");
  Meteor.publish('players', function () {
    return Players.find({});
  });
}

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