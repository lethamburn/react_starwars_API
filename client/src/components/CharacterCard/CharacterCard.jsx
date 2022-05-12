import React from "react";
import "./CharacterCard.scss";
const CharacterCard = ({ character }) => {
  return (
    <div className="character-portrait">
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
