import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './charsLeft.css';


class CharsLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>
        {this.props.number}
        {this.props.number === 1 ? ' char left' : ' chars left'
        }
      </p>
    );
  }
}


export default CharsLeft;

