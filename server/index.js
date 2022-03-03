const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");
const { connect } = require("./config/database");

const characters = require("./api/routes/characters.routes");
const movies = require("./api/routes/movies.routes");
const planets = require("./api/routes/planets.routes");

const app = express();
dotenv.config();
connect();
const PORT = process.env.PORT;

app.use(logger("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000"],
    credentials: true,
  })
);

app.all("/", (req, res) => {
  res.send(`
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
  body {background-color: #231f20; text-align: center}
  h1,h2,h3,h4,p, a   {color: #e5b13a; font-family: 'Lato', sans-serif;}
  a{color: #688fb9}
  </style>
  <h1>Welcome to @lethamburn Star Wars Server!</h1>
    <br />
    <img src="https://i.imgur.com/D25TOgW.png" alt="Star Wars gif" width="400px" />
    <br />
    <h2>Endpoints:</h2>
    
    <h3>Characters</h3>
    <a href="/characters">/characters</a>
    <br />
    <h3>Movies</h3>
    <a href="/movies">/movies</a>
    <br />
    <h3>Planets</h3>
    <a href="/planets">/planets</a>
   `);
});
app.use("/characters", characters);
app.use("/movies", movies);
app.use("/planets", planets);

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`Node server listening on port ${PORT}`);
});
