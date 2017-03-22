import React from 'react';
import { Accounts } from 'meteor/accounts-base';


export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <div className="col-xs-6 col-xs-offset-3">
          <h1>Protected Resources!</h1>
          <h3>You are currently logged in</h3>
          <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Logout</button>
        </div>
      </div>
    );
  }
}