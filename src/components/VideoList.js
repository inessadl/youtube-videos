import React from 'react';
import VideoItem from './VideoItem';
import './styles/VideoList.css';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
      return (
        <VideoItem
          onVideoSelect = { props.onVideoSelect }
          key = { video.etag }
          video = { video }
        />
      );
  });

  const videos = props.videos;

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );

}

export default VideoList;
