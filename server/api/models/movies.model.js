const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MoviesSchema = new Schema(
  {
    id: { type: Number, require: true },
    name: { type: String, require: true },
    year: { type: Number, require: true },
    poster: { type: String, require: true },
    crawl: { type: String, require: false },
    filmMakers: { type: Array, require: false },
  },
  { timestamps: true }
);

const Movie = mongoose.model("movies", MoviesSchema);
module.exports = Movie;
