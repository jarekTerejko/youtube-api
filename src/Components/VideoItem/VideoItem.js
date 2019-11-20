import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const VideoItem = ({ videoData, videoClick }) => {
  return (
    <Grid style={{ textAlign: "center" }} item xs={12} sm={6} md={4} lg={3}>
      <Paper
        style={{
          padding: "10px",
          cursor: "pointer",
          height: "100%"
        }}
        onClick={() => videoClick(videoData)}
      >
        <img
          src={videoData.snippet.thumbnails.high.url}
          alt={videoData.title}
          style={{ maxWidth: "100%" }}
        />
        <Typography variant="subtitle1">
          <b>{videoData.snippet.title}</b>
        </Typography>
        <Typography variant="subtitle2">
          {videoData.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">
          Added: {videoData.snippet.publishedAt.substring(0, 10)}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
