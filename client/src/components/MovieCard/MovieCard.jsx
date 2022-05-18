import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";
const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.name}`}>
    <figure className="movie">
      <h2>{movie.number}</h2>
      <img src={movie.poster} alt={movie.name} />
      <p>STAR WARS</p>
      <h3>{movie.name}</h3>
    </figure>
    </Link>
  );
};

export default MovieCard;
