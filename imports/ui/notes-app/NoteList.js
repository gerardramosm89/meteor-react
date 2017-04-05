import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Notes } from '../../api/notes';
import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';
import { Session } from 'meteor/session';

export class NoteList extends Component {
  renderNotes() {
    if (this.props.notes.length === 0) {
      return <NoteListEmptyItem /> 
    } else {
      return this.props.notes.map(note => {
        return <NoteListItem key={note._id} note={note} />
      });
    }
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
  const selectedNoteId = Session.get('selectedNoteId');
  Meteor.subscribe('notes');


  return {
    notes: Notes.find({}, { sort: {updatedAt: -1 }}).fetch().map((note) => {
      return { ...note, selected: note._id === selectedNoteId }
    })
  };
}, NoteList);