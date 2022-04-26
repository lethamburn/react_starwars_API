import React, {useState, useEffect} from "react";
import UISplashScreen from "../layout/UISplashScreen";
const SplashScreen = () => {
    const [animation, setAnimation] = useState("fadeIn")

    useEffect(() => {
        setTimeout(() => setAnimation("fadeOut"), 3000);
      }, []);

  return (
    <UISplashScreen>
      <h2 className={animation}>
        A long time ago in a galaxy far,
        <br />
        far away....
      </h2>
    </UISplashScreen>
  );
};

export default SplashScreen;
