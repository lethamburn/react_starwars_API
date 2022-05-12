import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader/Loader";

const Planets = () => {
  const { planets, planetsLoaded, setPlanetsLoaded } = useContext(SWContext);

  setTimeout(() => {
    setPlanetsLoaded(true);
  }, 3000);
  return (
    <section className="characters">
      <Fade triggerOnce cascade>
        {planetsLoaded === false ? (
          <Loader />
        ) : (
          <>
            <Fade triggerOnce cascade>
              {planets.map((planet) => (
                <figure key={planet.id}>
                  <img src={planet.image} alt={planet.name} width="200px" />
                  <h3>{planet.name}</h3>
                </figure>
              ))}
            </Fade>
          </>
        )}
      </Fade>
    </section>
  );
};

export default Planets;
