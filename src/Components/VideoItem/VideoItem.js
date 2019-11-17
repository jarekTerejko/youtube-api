import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { flexbox } from "@material-ui/system";

const VideoItem = ({ videoData, videoClick }) => {
  return (
    <Grid item xs={12}>
      <Paper
        style={{
          display: flexbox,
          alignItems: "center",
          justifyItems: "center",
          textAlign: "center",
          padding: "10px",
          cursor: "pointer"
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
      </Paper>
    </Grid>
  );
};

export default VideoItem;
