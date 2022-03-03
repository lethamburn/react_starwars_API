const express = require("express");

const router = express.Router();

const {
  getAllCharacters,
  getCharacterById,
} = require("../controllers/characters.controller");

router.get("/", getAllCharacters);
router.get("/:characterId", getCharacterById);

module.exports = router;
