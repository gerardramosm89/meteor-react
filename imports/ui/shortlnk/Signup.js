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
      console.log('Signup callback', err);
    });
    // this.setState({
    //   error: 'something went wrong'
    // });
  }
  render() {
    return (
      <div>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        Signup Component
        <form onSubmit={this.onSubmit.bind(this)}>
          <input ref="email" type="text" name="email" placeholder="Email" />
          <input ref="password" type="password" name="password" placeholder="password" />
          <button>Create Account</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}