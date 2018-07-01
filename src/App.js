import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/SearchBar.css';
import SearchBar from './components/SearchBar';
import API_KEY from './.env/config.js';

class App extends Component {
  render() {
    console.log(API_KEY);
    return (
      <div className="App">
        <header className="App-header"></header>
        <SearchBar />

      </div>
    );
  }
}

export default App;
