import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import NoteTitle from './noteTitle';
import NoteBody from './noteBody';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="title-row">
          <NoteTitle noteTitle="Note Title" />
        </div>
        <div className="body-row" >
          <NoteBody />
        </div>
      </div>
    );
  }
}


export default Main;

