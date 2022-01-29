import React, { useState, useEffect } from "react";
import axios from "./../axios.js";
import YouTube from "react-youtube";
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original";

type Props = {
  title: string,
  fetchUrl: string,
  isLargeRow?: boolean
}

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
}

export const Row = ({ title, fetchUrl, isLargeRow } :Props) => {
  const [ movies, setMovie ] = useState<Movie[]>([]);
  const [ trailerUrl, setTrailerUrl ] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      setMovie(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  console.log(movies);
  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      const API_KEY = import.meta.env.VITE_API_KEY;
      let res = await axios.get(`/movie/${movie.id}/videos?api_key=${API_KEY}`);
      setTrailerUrl(res.data.results[0]?.key);
    }
  }

  return (
    <div className="Row">
      <h2>{ title }</h2>
      <div className="Row-posters">
        {movies.map((movie, index) => (
          <img
            key={movie.id}
            className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
} 