import axios from "axios";
const { createContext, useState, useEffect } = require("react");

export const SWContext = createContext();

const BASEURL = "https://starwars-server.vercel.app";

export const SWContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [moviesLoaded, setMoviesLoaded] = useState(false);
  const [charactersLoaded, setCharactersLoaded] = useState(false);
  const [planetsLoaded, setPlanetsLoaded] = useState(false);

  //---MOVIES---
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(`${BASEURL}/movies`);
      setMovies(res.data.data.movies);
    };
    fetchMovies();
  }, []);

  //---CHARACTERS---
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await axios.get(`${BASEURL}/characters`);
      setCharacters(res.data.data.characters);
    };
    fetchCharacters();
  }, []);

  //---PLANETS---
  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await axios.get(`${BASEURL}/planets`);
      setPlanets(res.data.data.planets);
    };
    fetchPlanets();
  }, []);

 

  return (
    <SWContext.Provider
      value={{
        movies,
        moviesLoaded,
        setMoviesLoaded,
        characters,
        charactersLoaded,
        setCharactersLoaded,
        planets,
        planetsLoaded,
        setPlanetsLoaded,
      }}
    >
      {children}
    </SWContext.Provider>
  );
};
