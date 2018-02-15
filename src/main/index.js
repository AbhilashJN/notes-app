import React from 'react';
import './main.css';
import NoteTitle from '../noteTitle';
import NoteBody from '../noteBody';
import SaveBtn from '../saveBtn';
import CharsLeft from '../charsLeft';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMax: 10,
      currContent: '',
      currTitle: '',
      notesArr: [],
    };
  }
  showTitle=(e) => {
    this.setState({ currTitle: e.target.value });
  }
  showCount=(e) => {
    this.setState({ currContent: e.target.value });
  }
  saveNote=() => {
    if ((this.state.currTitle.length === 0) || (this.state.currContent.length === 0)) {
      return;
    }
    const currNote = { title: this.state.currTitle, content: this.state.currContent };
    this.state.notesArr.push(currNote);
    console.log(this.state);
    this.setState({ currTitle: '' });
    this.setState({ currContent: '' });
  }
  render() {
    return (
      <div className="main">
        <div className="title-row">
          <p>{this.state.title}<br />{this.state.value}</p>
          <NoteTitle noteTitle="Note Title" showTitle={this.showTitle} titleText={this.state.currTitle} />
        </div>
        <div className="body-row" >
          <NoteBody showCount={this.showCount} contentText={this.state.currContent} />
        </div>
        <div className="body-bottom-row">
          <div className="body-bottom-col1">
            <SaveBtn text="Save" saveNote={this.saveNote} />
          </div>
          <div className="body-bottom-col2">
            <CharsLeft number={(this.state.textMax) - (this.state.currContent.length)} />
          </div>
        </div>
      </div>
    );
  }
}


export default Main;

