import MovieCard from "./MovieCard";
import "../styles.css";

function MoviesList({ moviesList }) {


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
      }}
    >
      {moviesList.map((el, i) => (
        <MovieCard movie={el} key={i} />
      ))}
    </div>
  );
}

export default MoviesList;
