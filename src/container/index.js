import React from 'react';
import './container.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import ViewNotes from '../viewNotes';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: [],
      page: 'takeNote',
      titleText: '',
      contentText: '',
      mode: 'new',
      editId: -1,
      latestId: 0,
    };
  }
  addNote=(note) => {
    const notes = this.state.notesArr;
    let edited = false;

    let newLatestId = this.state.latestId;
    for (let i = 0; i < notes.length; i += 1) {
      if (notes[i].id === note.id) {
        notes[i] = Object.assign({}, note);
        edited = true;
        break;
      }
    }
    if (!edited) {
      notes.push(note);
      newLatestId = note.id;
    }
    this.setState({ notesArr: notes, editId: -1, latestId: newLatestId });


    console.log(this.state);
  }

  changePage=(pageName) => {
    this.setState({
      page: pageName,
      titleText: '',
      contentText: '',
      mode: 'new',
      editId: -1,
    });
  }

  editMode=(noteID) => {
    let title = '';
    let content = '';
    for (let i = 0; i < this.state.notesArr.length; i += 1) {
      if (this.state.notesArr[i].id === noteID) {
        title = this.state.notesArr[i].title;
        content = this.state.notesArr[i].content;
        break;
      }
    }
    this.setState({
      page: 'takeNote',
      titleText: title,
      contentText: content,
      mode: 'edit',
      editId: noteID,
    });
  }


  render() {
    const currPage = (this.state.page === 'takeNote' ? (<Main latestId={this.state.latestId} editId={this.state.editId} mode={this.state.mode} titleText={this.state.titleText} contentText={this.state.contentText} addNote={this.addNote} changepage={this.changePage} mode={this.state.mode} />) : (<ViewNotes editMode={this.editMode} changepage={this.changePage} notes={this.state.notesArr} />));
    return (
      <div className="container">
        <Header text="Start Taking Notes" />
        {currPage}
        <Footer text="About Us" />
      </div>
    );
  }
}


export default Container;

