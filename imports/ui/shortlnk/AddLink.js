import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();
    //const url = this.refs.url.value.trim();
    const { url } = this.state;
    if (url) {
      // Links.insert({ url, userId: Meteor.userId() });
      // Removed old insert
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({ url: '' });
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }
  render() {
    return(
      <div>
        <h2>Add Link</h2>
        <form className="form-group">
          <input 
          className="form-control" 
          type="text" 
          ref="url" 
          placeholder="URL" 
          value={this.state.url}
          onChange={this.onChange.bind(this)} />
          <button className="btn btn-success" onClick={this.onSubmit.bind(this)}>Add</button>
        </form>
      </div>
    );
  }
};