const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    id: { type: Number, require: true },
    name: { type: String, require: true },
    origin: { type: String, require: false },
    role: { type: String, require: false },
    image: { type: String, require: true },
    family: { type: Array, require: false },
  },
  { timestamps: true }
);

const Character = mongoose.model("characters", CharacterSchema);
module.exports = Character;
