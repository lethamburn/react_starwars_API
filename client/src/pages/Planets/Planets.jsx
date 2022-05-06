import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";

const Planets = () => {
  const { planets, planetsLoaded } = useContext(SWContext);
  return <section className="characters">
  <Fade triggerOnce cascade>
      <h2>Star Wars Planets</h2>
      {planetsLoaded === false ? (
        <img src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif" alt="Spinner" />
      ) : (
        <>
        <Fade triggerOnce cascade>
          {planets.map((planet) => (
            <figure key={planet.id}>
              <img src={planet.image} alt={planet.name} width="200px"/>
              <h3>{planet.name}</h3>
            </figure>
          ))}
          </Fade>
        </>
      )}
      </Fade>
    </section>;
};

export default Planets;
