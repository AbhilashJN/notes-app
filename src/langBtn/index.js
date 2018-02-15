import React from 'react';
import './langBtn.css';


class LangBtn extends React.Component {
  render() {
    return (
      <button className="langBtn">
        {this.props.text}
      </button>
    );
  }
}


export default LangBtn;

