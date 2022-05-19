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
            <div class="youtube-container">
              <iframe
                src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0`}
                title={movie.name}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
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
