const mongoose = require('mongoose');

const IngredientSchema = require('./ingredient');
const RecipeCategorySchema = require('./recipeCategory');
const RecipeSchema = require('./recipe');
const WineCategorySchema = require('./wineCategory');
const WineSchema = require('./wine');

const Ingredient = mongoose.model('Ingredient', IngredientSchema);
const RecipeCategory = mongoose.model('RecipeCategory', RecipeCategorySchema);
const Recipe = mongoose.model('Recipe', RecipeSchema);
const WineCategory = mongoose.model('WineCategory', WineCategorySchema);
const Wine = mongoose.model('Wine', WineSchema);

module.exports = {
  Ingredient,
  RecipeCategory,
  Recipe,
  WineCategory,
  Wine,
};
