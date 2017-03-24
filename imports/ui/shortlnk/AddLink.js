import React, { Component } from 'react';

export default class AddLink extends Component {

  onSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();
    if (url) {
      // Links.insert({ url, userId: Meteor.userId() });
      // Removed old insert
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }

  render() {
    return(
      <div>
        <h2>Add Link</h2>
        <form className="form-group">
          <input className="form-control" type="text" ref="url" placeholder="URL" />
          <button className="btn btn-success" onClick={this.onSubmit.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
};