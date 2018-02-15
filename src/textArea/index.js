import React from 'react';
import './textArea.css';


class textArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currClass: 'text-area',
      value: '',
    };
  }
  checkCount(e) {
    this.setState({ value: e.target.value });
    if (e.target.value.length === this.props.max) {
      this.setState({ currClass: 'text-area-red' });
    } else {
      this.setState({ currClass: 'text-area' });
    }
  }
  render() {
    return (
      <div className="body-text-row">
        <textarea value={this.props.contentText} className={this.state.currClass} maxLength={this.props.max} onInput={(e) => { this.checkCount(e); this.props.handleChange(e); }} />
      </div>
    );
  }
}


export default textArea;

