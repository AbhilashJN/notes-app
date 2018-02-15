import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './footer.css';


class Footer extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="footer">
        {this.props.text}
        </div>
      );
    }
  }
  
  
  export default Footer;
  