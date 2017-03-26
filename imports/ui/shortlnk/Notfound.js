import React from 'react';
import { Link } from 'react-router';

/*export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        Not Found
      </div>
    );
  }
}*/

export default () => {
    return (
      <div>
        404 not found.
        <Link to="/">Click to head home</Link>
      </div>
    );
}