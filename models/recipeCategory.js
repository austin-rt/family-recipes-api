const { Schema } = require('mongoose');

const RecipeCategorySchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = RecipeCategorySchema;
