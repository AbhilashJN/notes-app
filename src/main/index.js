import React from 'react';
import PropTypes from 'prop-types';
import './main.css';
import NoteTitle from '../noteTitle';
import NoteBody from '../noteBody';
import SaveBtn from '../saveBtn';
import CharsLeft from '../charsLeft';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMax: 150,
      currContent: this.props.contentText,
      currTitle: this.props.titleText,
      currId: this.props.latestId + 1,
      notesArr: [],
      mode: this.props.mode,
      editId: this.props.editId,
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

    const currNote = { id: (this.state.editId > 0 ? this.state.editId : this.state.currId), title: this.state.currTitle, content: this.state.currContent };
    let nextID = this.state.currId;
    if (this.state.mode === 'new') { nextID += 1; }
    console.log(currNote);
    this.props.addNote(currNote);
    this.setState({
      currTitle: '', currContent: '', currId: nextID, editId: -1,
    });
  }
  render() {
    return (
      <div className="main">
        <div className="title-row">
          <p>{this.state.title}<br />{this.state.value}</p>
          <NoteTitle noteTitle="Note Title" showTitle={this.showTitle} titleText={this.state.currTitle} mode={this.state.mode} noteid={this.currId} />
        </div>
        <div className="body-row" >
          <NoteBody showCount={this.showCount} contentText={this.state.currContent} textMax={this.state.textMax} mode={this.state.mode} noteid={this.currId} />
        </div>
        <div className="body-bottom-row">
          <div className="body-bottom-col1">
            <SaveBtn text="Save" saveNote={this.saveNote} />
          </div>
          <button className="page-button" onClick={() => { this.props.changepage('viewNotes'); }}> View Notes</button>
          <div className="body-bottom-col2">
            <CharsLeft number={(this.state.textMax) - (this.state.currContent.length)} />
          </div>

        </div>
      </div>
    );
  }
}


Main.defaultProps = {
  addNote: () => {},
  changepage: () => {},
};

Main.propTypes = {
  addNote: PropTypes.func,
  changepage: PropTypes.func,
};

export default Main;

