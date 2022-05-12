import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader/Loader";

const Characters = () => {
  const { characters, charactersLoaded, setCharactersLoaded } = useContext(SWContext);

  setTimeout(() => {
    setCharactersLoaded(true);
  }, 3000);
  return (
    <section className="characters">
      <Fade triggerOnce cascade>
        <h2>Star Wars Characters</h2>
        {charactersLoaded === false ? (
          <Loader />
        ) : (
          <>
            <Fade triggerOnce cascade>
              {characters.map((character) => (
                <figure key={character.id}>
                  <img
                    src={character.image}
                    alt={character.name}
                    width="200px"
                  />
                  <h3>{character.name}</h3>
                </figure>
              ))}
            </Fade>
          </>
        )}
      </Fade>
    </section>
  );
};

export default Characters;
