import React from 'react';
import './index.css';
import './container.css';
import Header from './header';
import Main from './main';
import Footer from './footer';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Header text="Start Taking Notes" />
        <Main />
        <Footer text="About Us" />
      </div>
    );
  }
}


export default Container;

