import React from "react";
import Button from "../Button/Button";
import "./FlipCard.scss";

const FlipCard = () => {
  return (
    <div className="container">
      <div className="front side">
        <div className="content">
          <p>
            <strong>Hello there!</strong>
            <br /> This web application is the front end of the server
            previously created in <strong> Node/Express</strong> with which to
            consult information about the movies, characters and planets of the
            <strong> Star Wars</strong> saga. <br />
            Feel free to search and share suggestions with me to improve the
            information currently in the database.
          </p>
        </div>
      </div>
      <div className="back side">
        <div className="content">
          <h2>API</h2>
          <a href="https://starwars-server.vercel.app/">
            <Button sectionName={"https://starwars-server.vercel.app/"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
