const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  ratings: [{ type: Number, required: true }],
});
