import React from "react";
import "./CharacterCard.scss";
const CharacterCard = ({ character, setSelectedCharacter }) => {
  return (
    <div className="character-portrait" onClick={() => setSelectedCharacter(character)}>
      <img src={character.portrait} alt={character.name} referrerpolicy="no-referrer"/>
    </div>
  );
};

export default CharacterCard;
