import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        {this.props.text}
      </div>
    );
  }
}

Footer.defaultProps = {
  text: 'Footer',
};

Footer.propTypes = {
  text: PropTypes.string,

};


export default Footer;

