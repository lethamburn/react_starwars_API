const Planet = require("../models/planets.model");

const getAllPlanets = async (req, res, next) => {
  try {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const planets = await Planet.find().skip(skip).limit(20);
      return res.json({
        status: 200,
        message: "OK",
        data: { planets: planets },
      });
    } else {
      const planets = await Planet.find();
      return res.json({
        status: 200,
        message: "OK",
        data: { planets: planets },
      });
    }
  } catch (err) {
    return next(err);
  }
};

const getPlanetById = async (req, res, next) => {
  try {
    const { planetId } = req.params;
    const planetById = await Planet.findById(planetId);
    return res.json({
      status: 200,
      message: "OK",
      data: { planets: planetById },
    });
  } catch (err) {
    return next(err);
  }
};

const getPlanetByName = async (req, res, next) => {
  const { name } = req.params;

  try {
    const planetByName = await Planet.find({ name: name });
    return res.json({
      status: 200,
      message: "OK",
      data: { planet: planetByName },
    });
  } catch (error) {
    return next(error);
  }
};
//Exportamos las funciones
module.exports = {
  getAllPlanets,
  getPlanetById,
  getPlanetByName,
};
