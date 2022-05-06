import React from "react";
import "./MovieCard.scss";
const MovieCard = ({ movie }) => {
  return (
    <figure key={movie.id} className="movie">
      <h2>{movie.number}</h2>
      <img src={movie.poster} alt={movie.name} width="200px" />
      <caption>STAR WARS</caption>
      <h3>{movie.name}</h3>
    </figure>
  );
};

export default MovieCard;
