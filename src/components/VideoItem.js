import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="ui segment item video-item   "
      key={video.id.videoId}
    >
      <img
        className="ui image "
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="ui content">
        <div className="ui header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
