import "./App.scss";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import Movies from "./pages/Movies/Movies";
import Planets from "./pages/Planets/Planets";
import Timeline from "./pages/Timeline/Timeline";
import About from "./pages/About/About";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Navbar from "./components/Navbar/Navbar";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/about" element={<About />} />
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
