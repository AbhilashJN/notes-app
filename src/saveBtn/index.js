import React from 'react';
import './saveBtn.css';


class SaveBtn extends React.Component {
  render() {
    return (
      <button className="saveBtn" onClick={() => { this.props.saveNote(); }}>
        {this.props.text}
      </button>
    );
  }
}


export default SaveBtn;

