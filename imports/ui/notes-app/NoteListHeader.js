import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

export class NoteListHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.meteorCall('notes.insert', (err,res) => {
            if (res) {
              this.props.Session.set('selectedNoteId', res);
            }
          });
          }} className="btn btn-primary">Add Note</button>
      </div>
    );
  }

}
export default createContainer(() => {
  return {
    meteorCall: Meteor.call,
    Session
  };
}, NoteListHeader);