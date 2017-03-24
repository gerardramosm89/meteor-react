import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class PrivateHeader extends Component {
  onLogout() {
    Accounts.logout();
  }

  render() {
    return (
        <div className="title-bar">
          <h1>Protected Resources</h1>
          <button className="btn btn-default btn--logout" onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
    );
  }
};