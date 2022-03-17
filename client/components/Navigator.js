import React from "react";
import Link from "next/link";
import UINavigator from "../layout/UINavigator";
const Navigator = () => {
  return (
    <UINavigator>
      <Link href="/movies">
        <a>Movies</a>
      </Link>
      <Link href="/characters">
        <a>Characters</a>
      </Link>
      <Link href="/planets">
        <a>Planets</a>
      </Link>
    </UINavigator>
  );
};

export default Navigator;
