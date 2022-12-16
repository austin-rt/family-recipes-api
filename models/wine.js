const { Schema, Types } = require('mongoose');

const WineSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'WineCategory', required: true },
    type: {
      type: String,
      enum: [
        'Cabernet Sauvignon',
        'Merlot',
        'Pinot Noir',
        'Zinfandel',
        'Chianti',
        'Chardonnay',
        'Savignon Blanc',
        'Pinot Grigio',
        'Reisling',
        'Rose',
        'Campaign',
        'Prosecco',
        'Moscato',
        'Icewine',
        'Port',
        'Sherry',
        'Marsala',
        'Malbec',
        'Malvasia',
        'Muscat',
        'Madeira',
        'Orange',
        'Sryah',
        'Red Blend',
        'White Blend',
        'Grenache Blanc',
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
