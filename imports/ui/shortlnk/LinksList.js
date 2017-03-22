import React from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../../api/links';

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }
  componentDidMount() {
    console.log("Component did mount links list");
    this.linksTracker = Tracker.autorun(() => {
      const links = Links.find({}).fetch();
      console.log("links from LinksList", links);
      this.setState({ links });
    });
  }

  componentWillUnmount() {
    console.log("Component will unmount links list");
    this.linksTracker.stop();
  }

  renderLinksListItems() {   
    return this.state.links.map(link => {
      return <div key={link._id}>{link.url}</div>
    });
  }
  render() {
    return(
      <div>
        <h2>Links List</h2>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    );
  }
}