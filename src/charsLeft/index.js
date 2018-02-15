import React from 'react';
import PropTypes from 'prop-types';
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


CharsLeft.defaultProps = {
  number: 0,
};

CharsLeft.propTypes = {
  number: PropTypes.number,
};


export default CharsLeft;

