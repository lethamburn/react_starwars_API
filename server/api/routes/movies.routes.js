const express = require("express");

const router = express.Router();

const {
  getAllMovies,
  getMovieById,
  getMovieByName
} = require("../controllers/movies.controller");

router.get("/", getAllMovies);
router.get("/:movieId", getMovieById);
router.get("/:name", getMovieByName)

module.exports = router;
