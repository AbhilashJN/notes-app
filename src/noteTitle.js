import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './noteTitle.css';
import LangBtn from './langBtn';

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
          <input type="text" className="input-title" />
        </div>
      </div>
    );
  }
}


export default NoteTitle;

