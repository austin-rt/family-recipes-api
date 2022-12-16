const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: [{ type: Schema.Types.ObjectId, ref: 'Category', required: true }],
    ingredients: [
      {
        ingredient: { type: Schema.Types.ObjectId, ref: 'Ingredient', required: true },
        quantity: { type: Number, required: true },
        unit: { type: String, required: true },
      },
    ],
    wines: [{ type: Schema.Types.ObjectId, ref: 'Wine', required: true }],
    directions: [{ type: String, required: true }],
    totalMinutes: { type: Number, required: true },
  },
  { timestamps: true }
);
