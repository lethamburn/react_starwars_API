import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Button from "../../layout/Button/Button";
const PlanetDetail = () => {
  const BASEURL = "https://starwars-server.vercel.app";
  const { name } = useParams();
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    const fetchPlanetByName = async () => {
      const res = await axios.get(`${BASEURL}/planets/${name}`);
      setPlanet(res.data.data.planet[0]);
    };
    fetchPlanetByName();
  }, [name]);

  return (
    <>
      {planet ? (
        <figure className="planet-detail">
          <figcaption>
            <h3>{planet.name}</h3>
            <img src={planet.image} alt={planet.name} />
            <p>{planet.region}</p>
            <p>{planet.description}</p>
            <img src={planet.background} alt={planet.name} />
          </figcaption>
          <Link to="/planets">
            <Button sectionName="Back to Planets" />
          </Link>
        </figure>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default PlanetDetail;
