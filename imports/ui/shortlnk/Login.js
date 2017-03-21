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
      console.log('Login callback', err);
    });
  }
  render() {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <div className="col-xs-6 col-xs-offset-3">
          <h1 className="text-center">Login Component</h1>
          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <input className="form-control" ref="email" type="text" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input className="form-control" ref="password" type="password" name="password" placeholder="password" />
            </div>
            <button className="btn btn-primary btn-lg text-center">Login</button>
          </form>
          <Link to="/signup">Have an account?</Link>
        </div>
      </div>
    );
  }
}