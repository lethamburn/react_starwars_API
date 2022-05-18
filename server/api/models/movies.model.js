const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    id: { type: Number, required: true },
    number: {type: String, required: false},
    name: { type: String, required: true },
    year: { type: Number, required: true },
    poster: { type: String, required: true },
    crawl: { type: String, required: false },
    filmMakers: { type: Array, required: false },
    trailer: {type: String, required: true}
  },
  { timestamps: true }
);

const Movie = mongoose.model("movies", MoviesSchema);
module.exports = Movie;
