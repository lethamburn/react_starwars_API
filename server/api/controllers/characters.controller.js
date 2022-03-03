const Character = require("../models/characters.model");

const getAllCharacters = async (req, res, next) => {
  try {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const characters = await Character.find().skip(skip).limit(20);
      return res.json({
        status: 200,
        message: "OK",
        data: { characters: characters },
      });
    } else {
      const characters = await Character.find();
      return res.json({
        status: 200,
        message: "OK",
        data: { characters: characters },
      });
    }
  } catch (err) {
    return next(err);
  }
};

const getCharacterById = async (req, res, next) => {
  try {
    const { characterId } = req.params;
    const characterById = await Character.findById(characterId);
    return res.json({
      status: 200,
      message: "OK",
      data: { characters: characterById },
    });
  } catch (err) {
    return next(err);
  }
};
//Exportamos las funciones
module.exports = {
  getAllCharacters,
  getCharacterById,
};
