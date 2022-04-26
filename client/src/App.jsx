import "./App.scss";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 5000);
  }, []);

  return (
    <>
      <Router>

      {loaded ? (
        <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      ) : (
        <>
          <SplashScreen />
        </>
      )}
      </Router>
    </>
  );
};

export default App;
