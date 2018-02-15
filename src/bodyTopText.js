import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bodyTopText.css';
import noteicon from './note.svg';

class BodyTopText extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="body-top-text">
        {this.props.text}&nbsp;
        <img src={noteicon} />
      </div>
    );
  }
}


export default BodyTopText;

