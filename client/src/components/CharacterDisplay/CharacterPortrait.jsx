import React from "react";
import "./CharacterPortrait.scss";

const CharacterPortrait = ({ character }) => {
  return <img className="portrait" src={character.portrait} alt={character.name} />;
};

export default CharacterPortrait;
