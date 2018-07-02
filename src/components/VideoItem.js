import React from 'react';

const VideoItem = (props) => {

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading"></div>
      </div>
    </li>
  );
}

export default VideoItem;
