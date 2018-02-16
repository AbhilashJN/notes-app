import React from 'react';
import PropTypes from 'prop-types';
import './noteDisplay.css';


class NoteDisplay extends React.Component {
  render() {
    return (
      <div>
        <div className="note-display-title">
          {this.props.title}
        </div>
        <div className="note-display-content">
          <textarea readOnly value={this.props.content} className="display-text-area" />
          <button onClick={() => { this.props.editMode(this.props.id); }}>Edit</button>
        </div>
      </div>
    );
  }
}


NoteDisplay.defaultProps = {
  title: '',
  content: '',
  id: 0,
  editMode: () => {},
};

NoteDisplay.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
  editMode: PropTypes.func,
};

export default NoteDisplay;

