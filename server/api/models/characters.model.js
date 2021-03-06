const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    origin: { type: String, required: false },
    role: { type: String, required: false },
    image: { type: String, required: true },
    portrait: {type: String, required: true},
    description: {type: String, required: false}
  },
  { timestamps: true }
);

const Character = mongoose.model("characters", CharacterSchema);
module.exports = Character;
