// create a rating model
// using mongoose

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
});

const Rating = mongoose.model("PlatformRating", ratingSchema);

module.exports = Rating;
