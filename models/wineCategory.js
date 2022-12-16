const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineCategorySchema = new Schema(
  {
    title: [
      {
        type: String,
        enum: ['RED', 'WHITE', 'ROSE', 'SPARKLING', 'DESSERT', 'FORTIFIED', 'NATURAL', 'PET NAT'],
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('WineCategory', WineCategorySchema);
