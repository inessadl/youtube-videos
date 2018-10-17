import React from 'react';
import './styles/VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="Video preview" />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">{ video.snippet.title }</div>
      </div>
    </li>);
}

export default VideoItem;
