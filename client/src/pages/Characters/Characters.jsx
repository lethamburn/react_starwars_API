import React, { useContext, useState } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader/Loader";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Characters.scss";
import CharacterDisplay from "../../components/CharacterDisplay/CharacterDisplay";
const Characters = () => {
  const { characters, charactersLoaded, setCharactersLoaded } =
    useContext(SWContext);

  const [selectedCharacter, setSelectedCharacter] = useState(undefined);

  setTimeout(() => {
    setCharactersLoaded(true);
  }, 3000);

  return (
    <section>
      <div className="characters">
        {charactersLoaded === false ? (
          <Loader />
        ) : (
          <Fade triggerOnce cascade delay={500}>
            <div className="characters-gallery">
              {characters.map((character) => (
                <CharacterCard
                  character={character}
                  key={JSON.stringify(character)}
                  setSelectedCharacter={setSelectedCharacter}
                />
              ))}
            </div>
            <div className="characters-display">
              <CharacterDisplay character={selectedCharacter} />
            </div>
          </Fade>
        )}
      </div>
    </section>
  );
};

export default Characters;
