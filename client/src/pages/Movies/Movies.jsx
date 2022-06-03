import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loader from "../../components/Loader/Loader";

const Movies = () => {
  const { movies, moviesLoaded, setMoviesLoaded } = useContext(SWContext);

  setTimeout(() => {
    setMoviesLoaded(true);
  }, 3000);

  return (
    <section className="movies">
      <Fade triggerOnce cascade>
        {moviesLoaded === false ? (
          <Loader />
        ) : (
          <>
            <Fade triggerOnce cascade>
              <article className="movies_gallery">
                {movies
                  .sort((a, b) => {
                    return a.id - b.id;
                  })
                  .map((movie) => (
                    <MovieCard movie={movie} key={JSON.stringify(movie)} />
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
