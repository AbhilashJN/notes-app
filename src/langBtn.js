import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './langBtn.css';


class LangBtn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="langBtn">
        {this.props.text}
      </button>
    );
  }
}


export default LangBtn;

