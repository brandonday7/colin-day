import React, { Component } from 'react';
import NavBar from "./Components/Layout/NavBar"
import Footer from "./Components/Layout/Footer"
import Container from "./Components/Layout/Container"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container />
        <Footer />
      </div>
    );
  }
}

export default App;
