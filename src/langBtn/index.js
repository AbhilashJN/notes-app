import React from 'react';
import PropTypes from 'prop-types';
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

LangBtn.defaultProps = {
  text: 'Button',
};

LangBtn.propTypes = {
  text: PropTypes.string,

};


export default LangBtn;

