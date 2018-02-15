import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './noteBody.css';
import BodyTopText from './bodyTopText';
import TextArea from './textArea';
import SaveBtn from './saveBtn';
import CharsLeft from './charsLeft';

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textMax: 10,
    };
  }
  showCount=(e) => {
    this.setState({ value: e.target.value });
  }


  render() {
    return (
      <div className="note-body">

        <BodyTopText text="Please type your note below" />
        <TextArea max={this.state.textMax} handleChange={this.showCount} />

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


export default NoteBody;

