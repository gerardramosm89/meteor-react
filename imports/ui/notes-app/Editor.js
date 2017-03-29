import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session} from 'meteor/session';
import { Notes } from '../../api/notes';
export class Editor extends Component {

  render() {
    return (
      <div>
        <h1>Editor Component</h1>
      </div>
    );
  }
}

// The below is the one used in the actual app!
// so you want to import the default

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId)
  };
}, Editor);