import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const BASEURL = "https://starwars-server.vercel.app";
  const { id } = useParams();
  const [character,setCharacter] = useState({})

  useEffect(() => {
    const fetchCharacterByID = async () => {
      const res = await axios.get(`${BASEURL}/movies/${id}`);
      console.log(res)
    };
    fetchCharacterByID();
  }, []);

  return (
    <div>
      <h2>Movies Detail</h2>
    </div>
  );
};

export default MovieDetail;
