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
  res.send(`<h1>Welcome to @lethamburn Star Wars Server!</h1>
    <br />
    <img src="https://i.pinimg.com/originals/5c/dc/c5/5cdcc57dac7d5becf47d6fa8eed7b66a.gif" alt="Star Wars gif" width="300px" />
    <br />
    <h2>Endpoints:</h2>
    
    <h3>🧑‍🚀 Characters</h3>
    <a href="/characters">/characters</a>
    <br />
    <h3>🎞️ Movies</h3>
    <a href="/movies">/movies</a>
    <br />
    <h3>🌍 Planets</h3>
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
