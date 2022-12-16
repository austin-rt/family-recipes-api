const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Ingredient', IngredientSchema);
