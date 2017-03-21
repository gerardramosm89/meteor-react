import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>

        Signup Component
        <Link to="/login">Login</Link>
      </div>
    );
  }
}