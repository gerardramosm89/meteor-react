import React from 'react';
import { Accounts } from 'meteor/accounts-base';


export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        Link Component
        <h1>Your Links</h1>
        <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}