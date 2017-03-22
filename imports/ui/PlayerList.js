import React, { Component } from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';
import { Players, calculatePlayerPositions } from '../api/players';


export default class PlayerList extends Component {
  componentDidMount() {
    this.playersTracker = Tracker.autorun(() => {
      let players = Players.find({}, { sort: { score: -1 }}).fetch();
      let positionedPlayers = calculatePlayerPositions(players);
      console.log("positionedplayers from PlayerList", positionedPlayers.length);
      this.setState({ players });
    });
  }

  componentWillUnmount() {
    this.playersTracker.stop();
  }

  renderPlayer() {
    return <div>testwtfff</div>
    /*if (!players) {
      return (
        <div className="item">
          <h2 className="item__message text-center">Please enter a player</h2>
        </div>
      );
    } else {
      return players.map((player) => {
        return <Player key={player._id} player={player} />
      });
    }*/
  }
  render (){
    return(
      <div>
        <h1 className="text-center playerlist--header">Player List</h1>
        <FlipMove easing="cubic-bezier(0, 0.7, 0.5, 0.1)"
        maintainContainerHeight={true}>
          {this.renderPlayer()}
        </FlipMove>
      </div>
    );
  }
}