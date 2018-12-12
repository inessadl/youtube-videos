import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppBar from './components/AppBar';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders an Appbar component', () => {
  expect(wrapper.contains(<AppBar />)).toBeTruthy();
});

it('renders a SearchBar component', () => {
  const fn = wrapper.getElement().props.children[1].props.onSearchTermChange;
  expect(wrapper.contains(
    <SearchBar onSearchTermChange={ fn } />
  )).toBeTruthy();
});

it('renders a VideoDetail component', () => {
  wrapper.setState({ selectedVideo: "test" });
  expect(wrapper.contains(
    <VideoDetail video={"test"} />
  )).toBeTruthy();
});

it('renders a VideoList component', () => {
  const videos = ["test", "testTwo"];
  wrapper.setState({ videos });
  const fn = wrapper.getElement().props.children[3].props.onVideoSelect;
  expect(wrapper.contains(
    <VideoList 
      videos={ videos } 
      onVideoSelect={ fn } />
  )).toBeTruthy();
});