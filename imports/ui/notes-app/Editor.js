import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session} from 'meteor/session';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
export class Editor extends Component {

  handleBodyChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      body: e.target.value
    });
  }

  handleTitleChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      title: e.target.value
    });
  }
  render() {
    if (this.props.note) {
      return (
        <div>
          title:
          <input 
          placeholder="Enter title here" 
          value={this.props.note.title}
          onChange={this.handleTitleChange.bind(this)} />
          <textarea 
          value={this.props.note.body} 
          placeholder="Note goes here!"
          onChange={this.handleBodyChange.bind(this)}></textarea>
          <button>Delete Note</button>
          <p>We got the note!</p>
        </div>
      );
    } else if (this.props.selectedNoteId) {
      return (
        <p>Note not found</p>
      );
    } else {
      return (
        <p>Pick or create a note</p>
      );
    }

  }
}

// The below is the one used in the actual app!
// so you want to import the default

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call
  };
}, Editor);