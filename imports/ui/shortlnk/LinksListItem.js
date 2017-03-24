import React from 'react';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    }
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    
    this.clipboard.on('success', () => {
      console.log("copied");
      this.setState({ justCopied: true });
      setTimeout(() => {
        this.setState({ justCopied: false});
      }, 1000);
    }).on('error', () => {
      console.log("error");
    });

  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  renderCopied() {
    if (this.state.justCopied === true){ 
      return <div>Copied</div>
    } else {
      return <div>copy</div>
    }
  }
  render() {
    let { props } = this;
    return (
      <div className="url-list--item" key={props._id}>
        <div>
          {props.url}
        </div>
        <div>
          <p className="url-list--shortlink">Short Link is: {props.shortUrl}</p>
          <button ref="copy" data-clipboard-text={props.shortUrl}>{this.renderCopied()}</button>
        </div>

      </div>
    );
  }
}