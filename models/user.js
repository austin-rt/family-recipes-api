import { isEmail } from 'validator';
const { Schema } = require('mongoose');

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    passwordDigest: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, 'invalid email'],
    },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  },
  { timestamps: true }
);

module.exports = UserSchema;
