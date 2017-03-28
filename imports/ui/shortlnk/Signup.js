import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

export class Signup extends React.Component {
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

    if (password.length < 9) {
      this.setState({
        error: 'password is too short'
      });
    }
    this.props.createUser({ email, password }, (err) => {
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
          <form onSubmit={this.onSubmit.bind(this)} noValidate>
            {this.state.error ? <div className="alert alert-danger" id="error">{this.state.error}</div> : undefined}
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

export default createContainer(() => {
    return {
      createUser: Accounts.createUser
    };
}, Signup);