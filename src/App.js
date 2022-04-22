import "./styles.css";
import React, { useState } from "react";

import { moviesData } from "./components/MoviesData";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import Search from "./components/Search";
function Moviee() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  const [search, setSearch] = useState(""); 
  return (
    <div className="wrapper">
      <Search  setSearch={setSearch} />
      <AddMovie addNewMovie={addNewMovie} /> 
      <MoviesList moviesList={moviesList} />
    </div>
  );
}

export default Moviee;
