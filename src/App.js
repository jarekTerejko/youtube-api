import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { apiKey, baseUrl, part, maxResults } from "./config";
import { Video } from "./Components/Video/Video";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { Container } from "@material-ui/core";
import VideoList from "./Components/VideoList/VideoList";
import { MyAppBar } from "./Components/MyAppBar/MyAppBar";

function App() {
  useEffect(() => {
    formSubmit("html5");
  }, []);

  const [videosData, setVideosData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const formSubmit = async searchTerm => {
    try {
      const response = await fetch(
        `${baseUrl}/search?type=video&part=${part}&maxResults=${maxResults}&q=${searchTerm}&key=${apiKey}`
      );
      const data = await response.json();
      setVideosData(data.items);
      setSelectedVideo(data.items[0]);
      console.log(data.items);
      console.log(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const videoClick = video => {
    setSelectedVideo(video);
  };

  return (
    <>
      <MyAppBar />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Grid justify="center" container spacing={5}>
              <Grid item xs={12}>
                {/* search bar */}
                <SearchBar formSubmit={formSubmit} />
              </Grid>
              <Grid item xs={12}>
                {/* video */}
                <Video selectedVideo={selectedVideo} />
              </Grid>
              <Grid item xs={12}>
                {/* video list */}
                <VideoList videosData={videosData} videoClick={videoClick} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
