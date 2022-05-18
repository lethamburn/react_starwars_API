import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader/Loader";
import "./Planets.scss";

const Planets = () => {
  const { planets, planetsLoaded, setPlanetsLoaded } = useContext(SWContext);

  setTimeout(() => {
    setPlanetsLoaded(true);
  }, 3000);

  return (
    <section className="planets">
      <Fade triggerOnce cascade>
        {planetsLoaded === false ? (
          <Loader />
        ) : (
          <>
            <Fade triggerOnce cascade>
              <section className="planets-gallery">
                {planets
                  .sort((a, b) => {
                    return a.name.localeCompare(b.name);
                  })
                  .map((planet) => (
                    <figure key={JSON.stringify(planet)}>
                      <div className="image-container">
                        <img src={planet.image} alt={planet.name} />
                      </div>
                      <h3>{planet.name}</h3>
                    </figure>
                  ))}
              </section>
            </Fade>
          </>
        )}
      </Fade>
    </section>
  );
};

export default Planets;
