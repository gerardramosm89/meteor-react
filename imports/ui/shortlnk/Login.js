import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }
  render() {
    return (
      <div>
        <div className="col-xs-6 col-xs-offset-3">
          <h1 className="text-center">Login</h1>
        {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : undefined}          
          <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <div className="form-group">
              <input className="form-control" ref="email" type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input className="form-control" ref="password" type="password" name="password" placeholder="password" />
            </div>
            <button className="btn btn-primary btn-lg text-center">Login</button>
          </form>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
  }
}