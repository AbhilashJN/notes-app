import React from 'react';
import './viewNotes.css';
import NoteDisplay from '../noteDisplay';


class ViewNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const notesElements = this.props.notes.map(note => (<NoteDisplay currNote={note} key={note.id} editMode={this.props.editMode} />));
    return (

      <div className="main">
        <div className="title-row" />
        <div className="body-row" >
          {notesElements}
        </div>
        <div className="note-display-bottom-row">
          <button className="page-button" onClick={() => { this.props.changepage('takeNote'); }}> Take Notes</button>
        </div>
      </div>

    );
  }
}


export default ViewNotes;

