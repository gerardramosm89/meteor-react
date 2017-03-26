import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default class Link extends React.Component {
  render() {
    return (
      <div>
        <PrivateHeader />
        <AddLink />
        <div className="col-xs-8 col-xs-offset-2">
          <LinksList />
        </div>
      </div>
    );
  }
}