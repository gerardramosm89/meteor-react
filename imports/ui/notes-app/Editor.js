import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session} from 'meteor/session';
import { Notes } from '../../api/notes';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }
  handleBodyChange(e) {
    const body = e.target.value;
    this.setState({ body });
    this.props.call('notes.update', this.props.note._id, {
      body
    });
  }

  handleTitleChange(e) {
    const title = e.target.value;
    this.setState({ title });
    this.props.call('notes.update', this.props.note._id, { title });
  }

  componentDidUpdate(prevProps, prevState) {
    const currentNoteId = this.props.note ? this.props.note._id : undefined;
    const prevNoteId = prevProps.note ? prevProps.note._id : undefined;

    if (currentNoteId && currentNoteId !== prevNoteId) {
      this.setState({
        title: this.props.note.title,
        body: this.props.note.body
      });
    }
  }

  deleteNote() {
    const id = this.props.note._id;
    // console.log(this.props.note._id);
    this.props.call('notes.remove', id);
    this.props.browserHistory.push('/dashboard');
  }
  render() {
    if (this.props.note) {
      return (
        <div>
          <div className="form-group col-xs-6">
            <h2>Enter Note Info:</h2>
            <input className="form-control"
            placeholder="Enter title here" 
            value={this.state.title}
            onChange={this.handleTitleChange.bind(this)} />
            <br />
            <textarea className="form-control"
            value={this.state.body} 
            placeholder="Note goes here!"
            onChange={this.handleBodyChange.bind(this)}></textarea>
            <br />
            <button onClick={this.deleteNote.bind(this)} className="btn btn-primary">Delete Note</button>
          <p>We got the note!</p>
          </div>
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
    call: Meteor.call,
    browserHistory
  };
}, Editor);