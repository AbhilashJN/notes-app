import React from 'react';
import PropTypes from 'prop-types';
import './header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        {this.props.text}
      </div>
    );
  }
}

Header.defaultProps = {
  text: 'Header',
};

Header.propTypes = {
  text: PropTypes.string,

};


export default Header;

