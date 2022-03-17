import React from "react";
import Head from "next/head";
import Gallery from "../layout/Gallery";

const characters = ({ characters }) => {
  return (
    <div>
      <Head>
        <title>Star Wars - Characters</title>
        <link rel="icon" href="./images/icon.png" />
      </Head>
      <h2>Characters</h2>
      <Gallery>
      {!characters ? (
        <>
          <p>Cargando...</p>
        </>
      ) : (
        <>
          {characters.data.characters.map((character) => {
            return (
              <figure key={JSON.stringify(character)}>
                <h3>{character.name}</h3>
                <img className="portrait" src={character.image} alt={character.name} width="200px" />
              </figure>
            );
          })}
        </>
      )}
      </Gallery>
    </div>
  );
};

export default characters;

export async function getStaticProps() {
  const resCharacters = await fetch(
    "https://starwars-server.vercel.app/characters"
  );
  const characters = await resCharacters.json();

  return {
    props: {
      characters,
    },
  };
}
