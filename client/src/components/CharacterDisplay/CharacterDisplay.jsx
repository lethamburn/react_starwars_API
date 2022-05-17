import React from "react";
import "./CharacterDisplay.scss";
import CharacterPortrait from "./CharacterPortrait";
const CharacterDisplay = ({ character }) => {
  console.log(character);
  return (
    <figure className="character-figure">
      {character !== undefined ? (
          <>
        <h2>{character.name}</h2>
        <CharacterPortrait character={character} />
        <p>Origin: {character.origin}</p>
        <p>Role: {character.role}</p>
        <p>{character.description}</p>
        </>
      ) : (
        <h2>Select Character</h2>
      )}
    </figure>
  );
};

export default CharacterDisplay;
