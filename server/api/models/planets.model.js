const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlanetsSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    suns: { type: Number, required: false },
    region: { type: String, required: false },
    size: { type: Number, required: false },
    coordinates: { type: String, required: false },
  },
  { timestamps: true }
);

const Planet = mongoose.model("planets", PlanetsSchema);
module.exports = Planet;
