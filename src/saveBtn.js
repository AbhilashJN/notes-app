import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './saveBtn.css';


class SaveBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  saveNote() {

  }
  render() {
    return (
      <button className="saveBtn" onClick={() => { this.saveNote(); }}>
        {this.props.text}
      </button>
    );
  }
}


export default SaveBtn;

