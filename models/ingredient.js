const { Schema } = require('mongoose');

const IngredientSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = IngredientSchema;
