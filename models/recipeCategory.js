const { Schema } = require('mongoose');

const RecipeCategorySchema = new Schema(
  {
    name: {
      type: String,
      enum: [
        'main',
        'vegitarian',
        'vegan',
        'chicken',
        'beef',
        'porh',
        'seafood',
        'side',
        'salad',
        'soup',
        'quick',
        'few ingredients',
      ],
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = RecipeCategorySchema;
