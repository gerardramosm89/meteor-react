import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links';
import LinksList from './LinksList';

export default class Link extends React.Component {
  onLogout() {
    Accounts.logout();
  }

  onSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();
    if (url) {
      console.log("url is: ", url);
      Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }
  
  render() {
    return (
      <div>
        <div className="col-xs-6 col-xs-offset-3">
          <h1>Protected Resources!</h1>
          <h3>You are currently logged in</h3>
          <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Logout</button>
          
          <h2>Add Link</h2>
          <form className="form-group">
            <input className="form-control" type="text" ref="url" placeholder="URL" />
            <button className="btn btn-success" onClick={this.onSubmit.bind(this)}>Add</button>
          </form>

          <LinksList />
        </div>
      </div>
    );
  }
}