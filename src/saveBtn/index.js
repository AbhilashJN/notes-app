import React from 'react';
import PropTypes from 'prop-types';
import './saveBtn.css';


class SaveBtn extends React.Component {
  render() {
    return (
      <button className="saveBtn" onClick={() => { this.props.saveNote(); }}>
        {this.props.text}
      </button>
    );
  }
}

SaveBtn.defaultProps = {
  text: '',
  saveNote: () => {},
};

SaveBtn.propTypes = {
  text: PropTypes.string,
  saveNote: PropTypes.func,
};


export default SaveBtn;

