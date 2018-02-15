import React from 'react';
import PropTypes from 'prop-types';
import './noteTitle.css';
import LangBtn from '../langBtn';

class NoteTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="note-title">
        <div className="row">
          <div className="left-column">
            <p>{this.props.noteTitle}</p>
          </div>
          <div className="right-column">
            <LangBtn text="en" />
          </div>
        </div>
        <div className="row">
          <input type="text" value={this.props.titleText} className="input-title" onChange={(e) => { this.props.showTitle(e); }} />
        </div>
      </div>
    );
  }
}

NoteTitle.defaultProps = {
  titleText: '',
  showTitle: () => {},
};

NoteTitle.propTypes = {
  titleText: PropTypes.string,
  showTitle: PropTypes.func,
};


export default NoteTitle;

