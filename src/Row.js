import React, { useState, useEffect } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // if [], run once when the row loads, and dont run again
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  //console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //console.log(movie?.name || movie?.title || movie?.original_name);
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((responce) => {
          console.log(responce);
          const urlParams = new URLSearchParams(new URL(responce).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  //console.log(trailerUrl);

  const poster = movies.map((movie) => (
    <img
      onClick={() => handleClick(movie)}
      className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
      src={`${imageBaseUrl}${
        props.isLargeRow ? movie.poster_path : movie.backdrop_path
      }`}
      alt={movie?.name || movie?.title || movie?.original_name}
      key={movie.id}
    />
  ));

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">{poster}</div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
