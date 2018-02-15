import React from 'react';
import PropTypes from 'prop-types';
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


BodyTopText.defaultProps = {
  text: '',
};

BodyTopText.propTypes = {
  text: PropTypes.string,

};


export default BodyTopText;

