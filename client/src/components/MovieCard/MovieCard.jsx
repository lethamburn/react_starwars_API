import React from "react";
import "./MovieCard.scss";
const MovieCard = ({ movie }) => {
  return (
    <figure className="movie">
      <h2>{movie.number}</h2>
      <img src={movie.poster} alt={movie.name} />
      <p>STAR WARS</p>
      <h3>{movie.name}</h3>
    </figure>
  );
};

export default MovieCard;
