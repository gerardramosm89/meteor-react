import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
export class PrivateHeader extends Component {
  render() {
    return (
        <div className="title-bar">
          <h1>Dashboard</h1>
          <button className="btn btn-default btn--logout" onClick={() => this.props.onLogout()}>Logout</button>
        </div>
    );
  }
};

export default createContainer(() => {
  return {
    onLogout: () => {
      browserHistory.push('/login');
      Accounts.logout();
    }
  };
}, PrivateHeader);