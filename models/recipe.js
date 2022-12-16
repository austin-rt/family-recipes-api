const { Schema } = require('mongoose');

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },
    image: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: 'RecipeCategory' }],
    ingredients: [
      {
        ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true },
        quantity: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
    wines: [{ type: Schema.Types.ObjectId, ref: 'Wine' }],
    wineTypes: [{ type: Schema.Types.ObjectId, ref: 'WineCategory' }],
    directions: [{ type: String, required: true }],
    totalMinutes: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = RecipeSchema;
