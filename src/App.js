import _ from 'lodash';
import React, { Component } from 'react';
import './index.css';
import './App.css';
import './components/styles/video-app.css';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
// import VideoItem from './components/VideoItem';
import VideoDetail from './components/VideoDetail';

import API_KEY from './.env/config.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('longboard');
}

videoSearch(term) {
  YTSearch({ key: API_KEY, term: term}, (videos) => {
    // console.log(data);
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

    return (
      // <div className="App">
      <div>
        <header className="App-header"></header>
      <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
