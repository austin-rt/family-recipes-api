const { Schema } = require('mongoose');

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = IngredientSchema;
