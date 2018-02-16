import React from 'react';
import PropTypes from 'prop-types';
import './noteDisplay.css';


class NoteDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="note-display-title">
          {this.props.currNote.title}
        </div>
        <div className="note-display-content">
          <textarea readOnly value={this.props.currNote.content} className="display-text-area" />
          <button onClick={() => { this.props.editMode(this.props.currNote.id) ;}}>Edit</button>
        </div>
      </div>
    );
  }
}


export default NoteDisplay;

