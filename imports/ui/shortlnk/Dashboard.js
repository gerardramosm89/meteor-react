import React from 'react';
import PrivateHeader from './PrivateHeader';
import NoteList from '../notes-app/NoteList';


export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader />

        <NoteList />
      </div>
    );
  }
}