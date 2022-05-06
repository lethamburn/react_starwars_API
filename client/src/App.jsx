import "./App.scss";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import { SWContextProvider } from "./context/context";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 5000);
  }, []);

  return (
    <>
      <Router>
      <SWContextProvider>
      {loaded ? (
        <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
          </Routes>
        </div>
      ) : (
        <>
          <SplashScreen />
        </>
      )}
      </SWContextProvider>
      </Router>
    </>
  );
};

export default App;
