import React, { Component } from 'react';
import NavBar from "./NavBar"
import Footer from "./Footer"
import Home from "./Home"
import "./Layout.css"

class Layout extends Component {
  render() {
    return (
      <div className="site-container">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Layout;
