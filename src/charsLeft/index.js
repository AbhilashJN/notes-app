import React from 'react';
import './charsLeft.css';


class CharsLeft extends React.Component {
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

