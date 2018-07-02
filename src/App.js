import React, { Component } from 'react';
import './index.css';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem';
import VideoDetail from './components/VideoDetail';

import API_KEY from './.env/config.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <SearchBar />

      </div>
    );
  }
}

export default App;
