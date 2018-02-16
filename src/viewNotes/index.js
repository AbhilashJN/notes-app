import React from 'react';
import PropTypes from 'prop-types';
import './viewNotes.css';
import NoteDisplay from '../noteDisplay';

class ViewNotes extends React.Component {
  render() {
    const notesElements = this.props.notes.map(note => (<NoteDisplay title={note.title} content={note.content} id={note.id} key={note.id} editMode={this.props.editMode} />));
    return (

      <div className="main">
        <div className="noted-display-body-row" >
          {notesElements}
        </div>
        <div className="note-display-bottom-row">
          <button className="page-button" onClick={() => { this.props.changepage('takeNote'); }}> Create New Note</button>
        </div>
      </div>

    );
  }
}

ViewNotes.defaultProps = {
  notes: [],
  changepage: () => {},
  editMode: () => {},
};

ViewNotes.propTypes = {
  notes: PropTypes.arrayOf(Object),
  changepage: PropTypes.func,
  editMode: PropTypes.func,
};

export default ViewNotes;

