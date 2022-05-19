import React from "react";
import { Fade } from "react-awesome-reveal";
import FlipCard from "../../layout/FlipCard/FlipCard";
import "./Home.scss";

const Home = () => {
  return (
    <main className="home">
      <Fade delay={1500} triggerOnce>
        <section className="showcase">
          <h1 className="title">STAR WARS</h1>
        </section>
      </Fade>
      <Fade triggerOnce delay={1000}>
        <div className="hero-container">
          <FlipCard />
        </div>
      </Fade>
      
    </main>
  );
};

export default Home;
