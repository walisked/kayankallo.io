import React from "react";
import Video from "./Video";
import Banner0 from "../Assect/images 11.jpeg";
import Banner1 from "../Assect/images 12.jpeg";
import Banner2 from "../Assect/images 13.jpeg";
import Banner3 from "../Assect/images 14.jpeg";

const MovieList = [
  {
    id: 0,
    videoImage: Banner0,
    videoTitle: "Algaita",
    videoDescription: "fassarar Algaita",
    videoPrice: 45,
    downloadLink: "download_link_url.mp4",
  },
  {
    id: 1,
    videoImage: Banner1,
    videoTitle: "Algaita",
    videoDescription: "fassarar Algaita",
    videoPrice: 45,
    downloadLink: "download_link_url.mp4",
  },
  {
    id: 2,
    videoImage: Banner2,
    videoTitle: "SULTAN",
    videoDescription: "fassarar Asultan",
    videoPrice: 35,
    downloadLink: "download_link_url.mp4",
  },
  {
    id: 3,
    videoImage: Banner3,
    videoTitle: "SULTAN",
    videoDescription: "fassarar Sultan",
    videoPrice: 35,
    downloadLink: "download_link_url.mp4",
  },
];

const MovieListComponent = () => {
  return (
    <div>
      {MovieList.map((movie) => (
        <Video
          key={movie.id}
          videoImage={movie.videoImage}
          videoTitle={movie.videoTitle}
          videoDescription={movie.videoDescription}
          videoPrice={movie.videoPrice}
        />
      ))}
    </div>
  );
};

export default MovieListComponent;
