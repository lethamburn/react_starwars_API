import Head from "next/head";

const Home = () => {
  return (
    <div>
      <div className="main"></div>
      <Head>
        <title>Star Wars</title>
        <link rel="icon" href="./images/icon.png" />
      </Head>
      <h1>Star Wars</h1>
    </div>
  );
};

export default Home;