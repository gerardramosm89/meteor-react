import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../../api/links';
import { Session } from 'meteor/session';
import LinksListItem from './LinksListItem';
export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [],
      showVisible: true
    };
  }
  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find({
        visible: Session.get('showVisible')
      }).fetch();
      this.setState({ links });
      const showVisible = Session.get('showVisible');
      this.setState({ showVisible })
    });
  }

  componentWillUnmount() {
    this.linksTracker.stop();
  }

  renderLinksListItems() {   
    return this.state.links.map(link => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} { ...link } />
      // return <div className="url-list--item" key={link._id}>{link.url}</div>
    });
  }

  checked(e) {
    Session.set('showVisible', !e.target.checked);
  }
  render() {
    return(
      <div>
        <h2 className="links-list--header">Links List</h2>
        <div className="url-list">
          <label>
          <input type="checkbox" checked={!this.state.showVisible} onChange={this.checked}/>
          show hidden links
          </label>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
}