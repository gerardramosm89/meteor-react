import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from '../notes-app/NoteList';
import Editor from '../notes-app/Editor';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader />

        <NoteList />

        <Editor />
      </div>
    );
  }
}

/*export default () => {
  return (
    <div>
      <Editor />
    </div>
  );
}*/