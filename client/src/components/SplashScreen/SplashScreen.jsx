import React, { useState, useEffect } from "react";
import "./SplashScreen.scss";
const SplashScreen = () => {
  const [animation, setAnimation] = useState("fadeIn");

  useEffect(() => {
    setTimeout(() => setAnimation("fadeOut"), 3000);
  }, []);

  return (
    <div className="splashScreen">
      <h2 className={animation}>
        A long time ago in a galaxy far,
        <br />
        far away....
      </h2>
    </div>
  );
};

export default SplashScreen;
