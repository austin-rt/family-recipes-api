const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeCategorySchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('RecipeCategory', RecipeCategorySchema);
