import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends Component {
  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
        <div>
          <h1>Protected Resources!</h1>
          <h3>You are currently logged in</h3>
          <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
    );
  }
};