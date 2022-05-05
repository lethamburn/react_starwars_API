import React from "react";
import { Fade } from "react-awesome-reveal";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <section className="showcase">
        <video src="./images/video.mp4" autoPlay loop muted></video>
        <h1 className="title">STAR WARS</h1>
      </section>
      <Fade triggerOnce delay={1000}>
        <div className="hero-container">
          <section className="hero">
            <p>
              <strong>Hello there!</strong>
              <br /> This web application is the front end of the server
              previously created in <strong> Node/Express</strong> with which to
              consult information about the movies, characters and planets of
              the
              <strong> Star Wars</strong> saga. <br />
              Feel free to search and share suggestions with me to improve the
              information currently in the database.
            </p>
          </section>
        </div>
      </Fade>
    </>
  );
};

export default Home;
