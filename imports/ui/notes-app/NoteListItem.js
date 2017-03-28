import React from 'react';
import moment from 'moment';

const NoteListItem =  (props) => {
  return (
    <div>
      <h3>{ props.note.title || 'Note needs title' }</h3>
      <p>{ moment(props.note.updatedAt).format('M/DD/YY') }</p>
    </div>
  );
}

export default NoteListItem;