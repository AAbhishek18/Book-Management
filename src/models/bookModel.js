const mongoose = require('mongoose')
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId;
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },

  userId: { type: ObjectId, ref: 'user', required: true },
  ISBN: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  subcategory: [{ type: String, required: true }],
  reviews: { type: Number, default: 0 },
  deletedAt: { type: Date },
  isDeleted: { type: Boolean, default: false },
  releasedAt: { type: Date, required: true },

}, { tipmestamps: true })

module.exports = mongoose.model('books', bookSchema) 