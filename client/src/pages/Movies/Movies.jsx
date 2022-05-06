import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Movies.scss";

const Movies = () => {
  const { movies, moviesLoaded } = useContext(SWContext);
  return (
    <section className="movies">
      <Fade triggerOnce cascade>
        <h2>Movies</h2>
        {moviesLoaded === false ? (
          <img
            src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
            alt="Spinner"
          />
        ) : (
          <>
            <Fade triggerOnce cascade>
              <article className="movies_gallery">
                {movies
                  .sort((a, b) => {
                    return a.id - b.id;
                  })
                  .map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
              </article>
            </Fade>
          </>
        )}
      </Fade>
    </section>
  );
};

export default Movies;
