import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Notes } from '../../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

export class NoteList extends Component {
  renderNotes() {
    return this.props.notes.map(note => {
      return <NoteListItem key={note._id} note={note} />
    });
  }

  render() {
    return (
      <div>
        <NoteListHeader />
        <h2>Notes List</h2>
        {this.renderNotes()}
        <div>
          <h4>Length is: {this.props.notes.length}</h4>
        </div>
      </div>
    );
  }
};

export default createContainer(() => {
  Meteor.subscribe('notes');

  return {
    notes: Notes.find().fetch()
  };
}, NoteList);