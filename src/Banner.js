import React, { useState, useEffect } from "react";
import axios from "./axios";
import request from "./request";
import "./Banner.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

function Banner() {
  const [movie, setMovie] = useState([]);

  const rand = (x) => {
    return Math.floor(Math.random() * x);
  };

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(request.fetchNetflixOriginals);
      //console.log(req.data.results[rand(20)]);
      setMovie(req.data.results[rand(20)]);
    }
    fetchData();
  }, [request.fetchNetflixOriginals]);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(180deg,transparent,rgba(37, 37, 37,0.2), rgba(37, 37, 37,0.61),#111),url(${imageBaseUrl}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div>
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner_info">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
}

export default Banner;
