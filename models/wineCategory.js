const { Schema } = require('mongoose');

const WineCategorySchema = new Schema(
  {
    name: {
      type: String,
      enum: ['red', 'white', 'rose', 'sparkling', 'dessert', 'fortified', 'natural', 'pet-nat'],
      required: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

module.exports = WineCategorySchema;
