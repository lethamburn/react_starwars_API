import React from "react";

import CharacterPortrait from "./CharacterPortrait";
const CharacterDisplay = ({ character }) => {
  return (
    <figure className="character-figure">
      {character !== undefined ? (
        <>
          <div className="character-description">
            <div className="character-description-container">
              <h2>{character.name}</h2>
              <h3>{character.name}</h3>
              <h4>Origin: {character.origin}</h4>
              <h4>{character.role}</h4>
              <p>{character.description}</p>
            </div>
          </div>
          <CharacterPortrait character={character} />
        </>
      ) : (
        <h2>Select a Character</h2>
      )}
    </figure>
  );
};

export default CharacterDisplay;
