import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <span className="loader-container">
      <img
        className="loader"
        src="./images/loading.gif"
        alt="Loading spinner"
      />
      <p>Loading . . . </p>
    </span>
  );
};

export default Loader;
