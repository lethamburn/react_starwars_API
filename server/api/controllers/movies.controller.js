const Movie = require("../models/movies.model");

const getAllMovies = async (req, res, next) => {
  try {
    if (req.query.page) {
      const page = parseInt(req.query.page);
      const skip = (page - 1) * 20;
      const movies = await Movie.find().skip(skip).limit(20);
      return res.json({
        status: 200,
        message: "OK",
        data: { movies: movies },
      });
    } else {
      const movies = await Movie.find();
      return res.json({
        status: 200,
        message: "OK",
        data: { movies: movies },
      });
    }
  } catch (err) {
    return next(err);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { movieId } = req.params;
    const movieById = await Movie.findById(movieId);
    return res.json({
      status: 200,
      message: "OK",
      data: { movies: movieById },
    });
  } catch (err) {
    return next(err);
  }
};
//Exportamos las funciones
module.exports = {
  getAllMovies,
  getMovieById,
};
