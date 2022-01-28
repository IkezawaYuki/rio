import React, { useState, useEffect } from "react";
import axios from "./../axios.js";

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

export const Row = ({ title, fetchUrl } :Props) => {
  const [ movie, setMovie ] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = axios.get(fetchUrl);
      setMovie(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  return (
    <div className="Row"></div>
  );
} 