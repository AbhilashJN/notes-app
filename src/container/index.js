import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveNote, updateNote } from '../redux/actions';
import './container.css';
import Header from '../header';
import Main from '../main';
import Footer from '../footer';
import ViewNotes from '../viewNotes';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'takeNote',
      titleText: '',
      contentText: '',
      editId: -1,
      latestId: 0,
    };
  }
  addNote=(note) => {
    let newLatestId = this.state.latestId;

    if (this.state.editId < 0) {
      newLatestId = note.id;
      this.props.saveNoteFn(note);
    } else {
      this.props.updateNoteFn(note);
    }
    this.setState({ editId: -1, latestId: newLatestId });
  }

  changePage=(pageName) => {
    this.setState({
      page: pageName,
      titleText: '',
      contentText: '',
      editId: -1,
    });
  }

  editMode=(noteID) => {
    let title = '';
    let content = '';
    for (let i = 0; i < this.props.notes.length; i += 1) {
      if (this.props.notes[i].id === noteID) {
        ({ title, content } = this.props.notes[i]);
        break;
      }
    }
    this.setState({
      page: 'takeNote',
      titleText: title,
      contentText: content,
      editId: noteID,
    });
  }


  render() {
    const currPage = (
      this.state.page === 'takeNote' ?
        (<Main
          latestId={this.state.latestId}
          editId={this.state.editId}
          titleText={this.state.titleText}
          contentText={this.state.contentText}
          addNote={this.addNote}
          changepage={this.changePage}
        />)
        : (<ViewNotes editMode={this.editMode} changepage={this.changePage} />));
    return (
      <div className="container">
        <Header text="Start Taking Notes" />
        {currPage}
        <Footer text="About Us" />
      </div>
    );
  }
}


const mapStateToProps = state => ({ notes: state.noteStorage.notes });
const mapDispatchToProps = dispatch => ({
  saveNoteFn: (currentNote) => {
    dispatch(saveNote(currentNote));
  },
  updateNoteFn: (currentNote) => {
    dispatch(updateNote(currentNote));
  },
});


Container.defaultProps = {
  notes: [],
  saveNoteFn: () => {},
  updateNoteFn: () => {},
};

Container.propTypes = {
  notes: PropTypes.arrayOf(Object),
  saveNoteFn: PropTypes.func,
  updateNoteFn: PropTypes.func,
};


export default connect(mapStateToProps, mapDispatchToProps)(Container);

