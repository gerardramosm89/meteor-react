import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
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

    Accounts.createUser({ email, password }, (err) => {
      console.log('err.reason is: ', err.reason);
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
          <h1>Signup Component</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : undefined}
            <div className="form-group">
              <label>Email Address:</label>
              <input className="form-control" ref="email" type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" ref="password" type="password" name="password" placeholder="password" />
            </div>
            <button className="btn btn-default">Create Account</button>
          </form>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}