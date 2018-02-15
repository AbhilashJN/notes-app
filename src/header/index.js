import React from 'react';
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


export default Header;

