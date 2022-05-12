import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <caption>
      <img
        className="loader"
        src="./images/loading.gif"
        alt="Loading spinner"
      />
      <p>Loading . . . </p>
    </caption>
  );
};

export default Loader;
