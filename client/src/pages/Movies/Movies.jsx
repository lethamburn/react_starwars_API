import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";

const Movies = () => {
  const { movies, moviesLoaded } = useContext(SWContext);
  return <section className="characters">
  <Fade triggerOnce cascade>
      <h2>Star Wars Movies</h2>
      {moviesLoaded === false ? (
        <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="Spinner" />
      ) : (
        <>
        <Fade triggerOnce cascade>
          {movies.map((movie) => (
            <figure key={movie.id}>
              <img src={movie.poster} alt={movie.name} width="200px"/>
              <h3>{movie.number}</h3>
              <h3>{movie.name}</h3>
            </figure>
          ))}
          </Fade>
        </>
      )}
      </Fade>
    </section>;
};

export default Movies;
