import "./styles.css";
import React, { useState } from "react";

import { moviesData } from "./components/MoviesData";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
function Moviee() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <div className="wrapper">
      <AddMovie addNewMovie={addNewMovie} />
      <MoviesList moviesList={moviesList} />
      
    </div>
  );
}

export default Moviee;
