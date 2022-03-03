const express = require("express");

const router = express.Router();

const {
  getAllMovies,
  getMovieById,
} = require("../controllers/movies.controller");

router.get("/", getAllMovies);
router.get("/:movieId", getMovieById);

module.exports = router;
