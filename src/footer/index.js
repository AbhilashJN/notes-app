import React from 'react';
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


export default Footer;

