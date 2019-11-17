import React from "react";
import { Paper, Typography } from "@material-ui/core";

export const Video = ({ selectedVideo }) => {
  if (!selectedVideo) return null;

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <Paper elevation={6} style={{ padding: "10px" }}>
      <iframe
        frameBorder="0"
        width="100%"
        height="360px"
        title="Video Player"
        src={videoSrc}
      ></iframe>
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
