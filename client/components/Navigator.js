import React from "react";
import Link from "next/link";
import UINavigator from "../layout/UINavigator";
const Navigator = () => {
  return (
    <UINavigator>
      <Link href="/">
        <a>
          <h1>Star Wars</h1>
          
        </a>
      </Link>
      <Link href="/movies">
        <a>
          <h4>Movies</h4>
          <h5>Movies</h5>
        </a>
      </Link>
      <Link href="/characters">
        <a>
          <h4>Characters</h4>
          <h5>Characters</h5>
        </a>
      </Link>
      <Link href="/planets">
        <a>
          <h4>Planets</h4>
          <h5>Planets</h5>
        </a>
      </Link>
    </UINavigator>
  );
};

export default Navigator;
