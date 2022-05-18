import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./MovieDetail.scss";
import Loader from "../../components/Loader/Loader";
import Button from "../../layout/Button/Button";
const MovieDetail = () => {
  const BASEURL = "https://starwars-server.vercel.app";
  const { name } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovieByID = async () => {
      const res = await axios.get(`${BASEURL}/movies/${name}`);
      setMovie(res.data.data.movie[0]);
    };
    fetchMovieByID();
  }, [name]);

  return (
    <>
      {movie ? (
        <figure className="movie-detail">
          <figcaption>
            <h2>Episode {movie.number}</h2>
            <h3>{movie.name}</h3>
            <img src={movie.poster} alt={movie.name} />
            <p>{movie.crawl}</p>
          </figcaption>
          <div className="video-container">
          <iframe title={movie.name} src={`https://player.vimeo.com/video/${movie.trailer}?autoplay=1`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="" width="600" height="300"></iframe>
          </div>
          <p>
            <strong>Year</strong> {movie.year}
          </p>
          {movie.filmMakers
            ? movie.filmMakers.map((filmMaker) => (
                <p key={JSON.stringify(filmMaker)}>
                  <strong>{filmMaker.role}</strong> {filmMaker.name}
                </p>
              ))
            : null}
          <span>
            <Link to="/movies">
              <Button sectionName="Back to Movies" />
            </Link>
          </span>
        </figure>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MovieDetail;
