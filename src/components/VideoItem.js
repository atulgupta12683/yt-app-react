import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <a className="header" href="/#">
          {video.snippet.title}
        </a>
        <div className="description">
          Published at {video.snippet.publishedAt}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
