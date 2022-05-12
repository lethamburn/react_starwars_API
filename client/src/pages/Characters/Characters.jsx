import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader/Loader";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Characters.scss";
const Characters = () => {
  const { characters, charactersLoaded, setCharactersLoaded } =
    useContext(SWContext);

  setTimeout(() => {
    setCharactersLoaded(true);
  }, 1000);
  return (
    <section className="characters">
      <Fade triggerOnce cascade>
        {charactersLoaded === false ? (
          <Loader />
        ) : (
          <>
            <Fade triggerOnce cascade>
              <div className="characters-gallery">
                {characters.map((character) => (
                  <CharacterCard character={character} key={JSON.stringify(character)} />
                ))}
              </div>
            </Fade>
          </>
        )}
      </Fade>
    </section>
  );
};

export default Characters;
