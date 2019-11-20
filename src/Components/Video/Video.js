import React from "react";
import { Paper, Typography } from "@material-ui/core";
import './Video.css'

export const Video = ({ selectedVideo }) => {
  if (!selectedVideo) return null;

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <Paper elevation={6} style={{ padding: "10px" }}>
    <div className="video-container">
    <iframe
        frameBorder="0"
        // width="100%"
        // height="360px"
        title="Video Player"
        id="ytplayer"
        type="text/html"
        src={`${videoSrc}?autoplay=1`}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
      
      <Typography variant="h4" style={{ marginTop: "20px" }}>
        {selectedVideo.snippet.title}
      </Typography>
      <Typography variant={"subtitle1"}>
        {selectedVideo.snippet.channelTitle}
      </Typography>
      <Typography variant={"subtitle2"}>
        {selectedVideo.snippet.description}
      </Typography>
    </Paper>
  );
};
