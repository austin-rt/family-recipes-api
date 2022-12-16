const { Schema, Types } = require('mongoose');

const WineSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, lowercase: true },
    image: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'WineCategory', required: true },
    type: {
      type: String,
      enum: [
        'cabernet-sauvignon',
        'merlot',
        'pinot-noir',
        'zinfandel',
        'chianti',
        'chardonnay',
        'savignon-blanc',
        'pinot-grigio',
        'reisling',
        'rose',
        'campaign',
        'prosecco',
        'moscato',
        'icewine',
        'port',
        'sherry',
        'marsala',
        'malbec',
        'malvasia',
        'muscat',
        'madeira',
        'orange',
        'sryah',
        'red-blend',
        'white-blend',
        'grenache-blanc',
      ],
      required: true,
    },
    description: { type: String },
    foundAt: [{ type: String }],
    price: { type: Types.Decimal128 },
    bottleSizeInMl: { type: Number, default: 750 },
    ratings: [{ type: Number, min: 1, max: 5, default: 2.5 }],
  },
  { timestamps: true }
);

module.exports = WineSchema;
