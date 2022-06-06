const express = require("express");

const router = express.Router();

const {
  getAllPlanets,
  getPlanetById,
  getPlanetByName
} = require("../controllers/planets.controller");

router.get("/", getAllPlanets);
/* router.get("/:movieId", getPlanetById); */
router.get("/:name", getPlanetByName)

module.exports = router;
