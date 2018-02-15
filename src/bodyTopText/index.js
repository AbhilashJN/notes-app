import React from 'react';
import './bodyTopText.css';
import noteicon from '../note.svg';

class BodyTopText extends React.Component {
  render() {
    return (
      <div className="body-top-text">
        {this.props.text}&nbsp;
        <img src={noteicon} alt="note-icon" />
      </div>
    );
  }
}


export default BodyTopText;

