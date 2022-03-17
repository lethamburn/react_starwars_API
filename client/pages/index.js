import Head from "next/head";

const Home = ({characters}) => {
  //console.log("CHARACTERS->", characters.data.characters);
  //console.log("MOVIES->", movies.data.movies);
  //console.log("PLANETS->", planets.data.planets);
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

export async function getStaticProps() {

  const resCharacters = await fetch('https://starwars-server.vercel.app/characters')
  const characters = await resCharacters.json();
 /*  const resMovies = await fetch("https://starwars-server.vercel.app/movies");
  const movies = await resMovies.json();
  const resPlanets = await fetch("https://starwars-server.vercel.app/planets");
  const planets = await resPlanets.json(); */

  return {
    props: {
      characters,
    /*   movies,
      planets */
    },
  }
}