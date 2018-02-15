import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import NoteTitle from './noteTitle';
import NoteBody from './noteBody';
import SaveBtn from './saveBtn';
import CharsLeft from './charsLeft';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textMax: 10,
      value: '',
    };
  }
  showCount=(e) => {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="main">
        <div className="title-row">
          <NoteTitle noteTitle="Note Title" />
        </div>
        <div className="body-row" >
          <NoteBody showCount={this.showCount} />
        </div>
        <div className="body-bottom-row">
          <div className="body-bottom-col1">
            <SaveBtn text="Save" />
          </div>
          <div className="body-bottom-col2">
            <CharsLeft number={(this.state.textMax) - (this.state.value.length)} />
          </div>
        </div>
      </div>
    );
  }
}


export default Main;

