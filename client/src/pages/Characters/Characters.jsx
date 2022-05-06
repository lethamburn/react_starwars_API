import React, { useContext } from "react";
import { SWContext } from "../../context/context";

const Characters = () => {
  const { characters, charactersLoaded } = useContext(SWContext);
  return <div>
      <h2>Star Wars Characters</h2>
      {charactersLoaded === false ? (
        <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="Spinner" />
      ) : (
        <>
          {characters.map((character) => (
            <figure key={character.id}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </figure>
          ))}
        </>
      )}
    </div>;
};

export default Characters;
