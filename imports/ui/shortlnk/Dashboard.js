import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from '../notes-app/NoteList';
import Editor from '../notes-app/Editor';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <div className="col-xs-3 col-xs-offset-1">
          <NoteList />
        </div>
        <div className="col-xs-7">
          <Editor />
        </div>
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