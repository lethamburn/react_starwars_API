import React from "react";
import Head from "next/head";

const characters = ({ characters }) => {
  return (
    <div>
      <Head>
        <title>Star Wars - Characters</title>
        <link rel="icon" href="./images/icon.png" />
      </Head>
      <h2>Characters</h2>
      {!characters ? (
        <>
          <p>Cargando...</p>
        </>
      ) : (
        <>
          <h3>Personaje</h3>
          {characters.data.characters.map((character) => {
            return (
              <figure key={JSON.stringify(character)}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} width="200px" />
              </figure>
            );
          })}
        </>
      )}
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
