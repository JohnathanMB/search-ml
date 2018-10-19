import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchResult from "./components/SearchResult";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">mercado react</h1>
        </header>
        <SearchResult />
      </div>
    );
  }
}

export default App;
