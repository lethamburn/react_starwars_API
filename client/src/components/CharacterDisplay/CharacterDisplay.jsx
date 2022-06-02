import React from "react";
import "./CharacterDisplay.scss";
import CharacterPortrait from "./CharacterPortrait";
const CharacterDisplay = ({ character }) => {
  return (
    <figure className="character-figure">
      {character !== undefined ? (
        <>
          <div className="character-description"></div>
          <CharacterPortrait character={character} />
        </>
      ) : (
        <h2>Select a Character</h2>
      )}
    </figure>
  );
};

export default CharacterDisplay;
