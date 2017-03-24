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
        <div className="col-xs-6 col-xs-offset-3">
          <PrivateHeader />          
          <AddLink />
          <LinksList />
        </div>
      </div>
    );
  }
}