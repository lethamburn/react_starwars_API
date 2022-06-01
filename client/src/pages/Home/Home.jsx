import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../layout/Button/Button";
const Home = () => {
  return (
      <Fade delay={1500} triggerOnce>
    <main className="home">
        <section className="showcase">
          <img src="./icons/logo.png" alt="Star Wars Logo" />
        </section>
        <section className="description">
          <h2>A STAR WARS CLIENT</h2>
          <h3>A STAR WARS CLIENT</h3>
          <a href="https://starwars-server.vercel.app/" target="_blank">
            <Button sectionName="Link to the API" />
          </a>
          <img src="./ui/deathstarcontrols.svg" alt="Death Star Controls" />
        </section>
    </main>
      </Fade>
  );
};

export default Home;
