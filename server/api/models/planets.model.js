const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanetsSchema = new Schema(
  {
    id: { type: Number, require: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    suns: { type: Number, require: false },
    region: { type: String, require: false },
    size: { type: Number, require: false },
    coordinates: { type: String, require: false },
  },
  { timestamps: true }
);

const Planet = mongoose.model("planets", PlanetsSchema);
module.exports = Planet;
