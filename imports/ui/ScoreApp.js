import React, { Component } from 'react';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import { Players, calculatePlayerPositions } from './../api/players';


export default class ScoreApp extends Component {
  componentWillMount() {
    console.log("componentWillMount");
    this.players = Players.find({}, { sort: { score: -1 }}).fetch();
    console.log(this.players);
  }
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(function(){
      console.log("timeout");
      console.log(this.players);
    }, 1000);
  }
  render() {
    console.log("This.props.players from ScoreApp is: ", this.props.players);
    return (
      <div>
        <div className="col-xs-6 col-xs-offset-3">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
};