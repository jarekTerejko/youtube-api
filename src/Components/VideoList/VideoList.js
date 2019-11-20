import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "../VideoItem/VideoItem";

const VideoList = ({ videosData, videoClick }) => {
  const listOfVideos = videosData.map((video, id) => {
    return <VideoItem videoClick={videoClick} videoData={video} key={id} />;
  });
  return (
    <Grid container spacing={5}>
      {listOfVideos}
    </Grid>
  );
};

export default VideoList;
