import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './noteBody.css';
import BodyTopText from './bodyTopText';
import TextArea from './textArea';


class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      textMax: 10,
    };
  }


  render() {
    return (
      <div className="note-body">
        <BodyTopText text="Please type your note below" />
        <TextArea max={this.state.textMax} handleChange={this.props.showCount} />
      </div>
    );
  }
}


export default NoteBody;

