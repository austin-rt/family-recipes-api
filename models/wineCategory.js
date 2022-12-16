const { Schema } = require('mongoose');

const WineCategorySchema = new Schema(
  {
    title: [
      {
        type: String,
        enum: ['Red', 'White', 'Rose', 'Sparkling', 'Dessert', 'Fortified', 'Natural', 'Pet Nat'],
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = WineCategorySchema;
