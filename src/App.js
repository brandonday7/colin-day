import React, { Component } from 'react';
import NavBar from "./Components/Layout/NavBar"
import Footer from "./Components/Layout/Footer"
import Body from "./Components/Layout/Body"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="site-container">
        <NavBar />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
