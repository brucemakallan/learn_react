import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
