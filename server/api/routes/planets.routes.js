const express = require("express");

const router = express.Router();

const {
  getAllPlanets,
  getPlanetById,
} = require("../controllers/planets.controller");

router.get("/", getAllPlanets);
router.get("/:movieId", getPlanetById);

module.exports = router;
