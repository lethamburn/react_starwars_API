import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div>
      <section className="showcase">
        <video src="./images/video.mp4" autoPlay loop muted></video>
        <h1 className="title">STAR WARS</h1>
      </section>
    </div>
  );
};

export default Home;
