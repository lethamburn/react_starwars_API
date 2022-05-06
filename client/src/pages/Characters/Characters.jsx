import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";

const Characters = () => {
  const { characters, charactersLoaded } = useContext(SWContext);
  return <section className="characters">
  <Fade triggerOnce cascade>
      <h2>Star Wars Characters</h2>
      {charactersLoaded === false ? (
        <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="Spinner" />
      ) : (
        <>
        <Fade triggerOnce cascade>
          {characters.map((character) => (
            <figure key={character.id}>
              <img src={character.image} alt={character.name} width="200px"/>
              <h3>{character.name}</h3>
            </figure>
          ))}
          </Fade>
        </>
      )}
      </Fade>
    </section>;
};

export default Characters;