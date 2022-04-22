import React from "react";

import ReactStars from "react-stars";

function MovieCard({ movie }) {
  return (
    <div className="screen-2">
      <div className="top-image">
        <img src={movie.image} alt="poster" />
      </div>

      <div className="main-heading">
        <h1 className="title">{movie.name}</h1>
        <div className="row">
          {
            <ReactStars
              count={5}
              size={15}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
          }

          <span>{movie.date}</span>
          <span className="r">R</span>
          <span>{movie.seasons}</span>
          <span className="hd">HD</span>
        </div>
      </div>

      <div className="categories">
        <a href="#" className="active">
          Description
        </a>
        <a href="#">Episodes</a>
        <a href="#">Reviews</a>
      </div>

      <p className="description">{movie.description}</p>
      <div className="btn-play">
        <span>
          {" "}
          <ion-icon className="icon" name="play"></ion-icon>{" "}
        </span>
        Play
      </div>
    </div>
  );
}

export default MovieCard;
