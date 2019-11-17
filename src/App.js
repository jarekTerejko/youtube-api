import React, {useState} from "react";

import { Grid } from "@material-ui/core";
import { apiKey, baseUrl, part, maxResults } from "./config";
import { Video } from "./Components/Video/Video";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import VideoList from "./Components/VideoList/VideoList";





function App() {

  const [videosData, setVideosData] = useState([])
const [selectedVideo, setSelectedVideo] = useState(null)

const formSubmit = async searchTerm => {
  console.log(searchTerm);
 

  const response = await fetch(`${baseUrl}/search?type=video&part=${part}&maxResults=${maxResults}&q=${searchTerm}&key=${apiKey}`)
  const data = await response.json()
  setVideosData(data.items)
  setSelectedVideo(data.items[0])
  console.log(data.items)
  console.log(data.items[0])
};

const videoClick = (video) => {
  setSelectedVideo(video)
}

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            {/* search bar */}
            <SearchBar formSubmit={formSubmit} />
          </Grid>
          <Grid item xs={8}>
            {/* video */}
            <Video selectedVideo={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            {/* video list */}
            <VideoList videosData={videosData} videoClick={videoClick} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
