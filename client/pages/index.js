import Head from "next/head";

const Home = ({characters, movies, planets}) => {
  
  return (
    <div>
      <div className="main"></div>
      <Head>
        <title>Star Wars</title>
        <link rel="icon" href="./images/icon.png" />
      </Head>
      <h1>Star Wars</h1>
    </div>
  );
};

export default Home;

export async function getStaticPropsCharacters() {

  const resCharacters = await fetch('https://starwars-server.vercel.app/characters')
  const characters = await resCharacters.json();

  return {
    props: {
      characters
    },
  }
}

export async function getStaticPropsMovies() {

  const resMovies = await fetch('https://starwars-server.vercel.app/movies')
  const movies = await resMovies.json();

  return {
    props: {
      movies
    },
  }
}

export async function getStaticPropsPlanets() {

  const resPlanets = await fetch('https://starwars-server.vercel.app/planets')
  const planets = await resPlanets.json();

  return {
    props: {
      planets
    },
  }
}