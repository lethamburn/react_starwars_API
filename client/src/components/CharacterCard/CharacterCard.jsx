import React from "react";
import "./CharacterCard.scss";
const CharacterCard = ({ character, setSelectedCharacter }) => {
  return (
    <div className="character-portrait" onClick={() => setSelectedCharacter(character)}>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
