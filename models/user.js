import { isEmail } from 'validator';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  passwordDigest: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'invalid email'],
  },
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
});
