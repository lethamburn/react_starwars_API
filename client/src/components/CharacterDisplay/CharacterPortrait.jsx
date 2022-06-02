import React from "react";
import "./CharacterPortrait.scss";

const CharacterPortrait = ({ character }) => {
  return (
    <span className="character-card-container">
      <div className="character-card"></div>
      <img
        className="portrait"
        src={character.image}
        alt={character.name}
        referrerpolicy="no-referrer"
      />
      <div className="character-holo"></div>
    </span>
  );
};

export default CharacterPortrait;
