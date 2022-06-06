import React, { useContext } from "react";
import { SWContext } from "../../context/context";
import { Fade } from "react-awesome-reveal";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
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
            <section className="planets-gallery">
              <Fade triggerOnce cascade>
                {planets
                  .sort((a, b) => {
                    return a.name.localeCompare(b.name);
                  })
                  .map((planet) => (
                    <Link to={`/planets/${planet.name}`}>
                    <figure key={JSON.stringify(planet)}>
                      <div className="image-container">
                        <img src={planet.image} alt={planet.name} />
                      </div>
                      <h3>{planet.name}</h3>
                    </figure>
                    </Link>
                  ))}
              </Fade>
            </section>
          </>
        )}
      </Fade>
    </section>
  );
};

export default Planets;
