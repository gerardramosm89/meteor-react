import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      err: "",
      modalIsOpen: false
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const { url } = this.state;
    if (url) {
      // Links.insert({ url, userId: Meteor.userId() });
      // Removed old insert
      Meteor.call('links.insert', url, (err, res) => {
        if (err) {
          this.setState({ err: err.reason });
        }
        if (!err) {
          this.setState({ url: '', modalIsOpen: false });
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value,
      err: ""
    });
  }

  renderError() {
    if (this.state.err !== "") {
      return <div className="alert alert-danger">{ this.state.err }</div>
    } else {
      return
    }
  }

  handleModalClose() {
    this.setState({ modalIsOpen: false, url: '', err: '' });
  }
  render() {
    return(
      <div>
        <div className="text-center">
          <h1>Add Link</h1>
          <button
            className="btn btn-primary" 
            onClick={() => this.setState({ modalIsOpen: true })
          }>Add Link</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Adding Link"
          onAfterOpen={() => this.refs.url.focus()}
          onRequestClose={this.handleModalClose.bind(this)}
        >
          {this.renderError()}
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
          <button 
          className="btn btn-primary"
          onClick={this.handleModalClose.bind(this)}>Cancel</button>
        </Modal>
      </div>
    );
  }
};