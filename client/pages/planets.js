import UIGallery from "../layout/UIGallery";
import Head from "next/head";
const planets = ({ planets }) => {
  return (
    <div>
      <Head>
        <title>Star Wars - Planets</title>
        <link rel="icon" href="./images/icon.png" />
      </Head>
      <h2>Planets</h2>
      <UIGallery>
        {!planets ? (
          <>
            <p>Cargando...</p>
          </>
        ) : (
          <>
            {planets.data.planets.map((planet) => {
              return (
                <figure key={JSON.stringify(planet)}>
                  <h3>{planet.name}</h3>
                  <img
                    className="planet"
                    src={planet.image}
                    alt={planet.name}
                    width="200px"
                  />
                </figure>
              );
            })}
          </>
        )}
      </UIGallery>
    </div>
  );
};

export default planets;

export async function getStaticProps() {
  const resPlanets = await fetch("https://starwars-server.vercel.app/planets");
  const planets = await resPlanets.json();

  return {
    props: {
      planets,
    },
  };
}
