import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./request";
import "./Banner.css";
function Banner() {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(requests.fetchNetflixOriginals)
      .then((res) => {
        setMovie(
          res.data.results[
            Math.floor(Math.random() * res.data.results.length - 1)
          ]
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(movie);
  function turncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const [change, setChange] = useState(false);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_caption" onClick={() => setChange(true)}>
          {change ? movie?.overview : turncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadebottom"></div>
    </header>
  );
}

export default Banner;
