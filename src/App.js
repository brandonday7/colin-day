import React, { Component } from 'react';
import NavBar from "./Components/Layout/NavBar"
import Footer from "./Components/Layout/Footer"
import Home from "./Components/Layout/Home"
import "./App.css"

class App extends Component {
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

export default App;
