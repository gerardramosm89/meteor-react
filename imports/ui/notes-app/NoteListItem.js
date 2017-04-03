import React, { Component } from 'react';
import moment from 'moment';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

export class NoteListItem extends Component {
  constructor(props){
    super(props);
  }

  handleClick() {
    this.props.Session.set('selectedNoteId', this.props.note._id);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h3>{ this.props.note.title || 'Note needs title' }</h3>
        { this.props.note.selected ? 'selected' : undefined }
        <p>{ moment(this.props.note.updatedAt).format('M/DD/YY') }</p>
      </div>
    );
  }
}

export default createContainer(() => {
  return { Session };
}, NoteListItem)