import UIGallery from "../layout/UIGallery";
import Head from "next/head";
const movies = ({ movies }) => {
  return (
    <div>
      <Head>
        <title>Star Wars - Movies</title>
        <link rel="icon" href="./images/icon.png" />
      </Head>
      <h2>Movies</h2>
      <UIGallery>
        {!movies ? (
          <>
            <p>Cargando...</p>
          </>
        ) : (
          <>
            {movies.data.movies.map((movie) => {
              return (
                <figure key={JSON.stringify(movie)}>
                  <h3>{movie.name}</h3>
                  <img
                    className="portrait"
                    src={movie.poster}
                    alt={movie.name}
                    width="200px"
                  />
                </figure>
              );
            })}
          </>
        )}
      </UIGallery>
    </div>
  );
};

export default movies;

export async function getStaticProps() {
  const resMovies = await fetch("https://starwars-server.vercel.app/movies");
  const movies = await resMovies.json();

  return {
    props: {
      movies,
    },
  };
}
