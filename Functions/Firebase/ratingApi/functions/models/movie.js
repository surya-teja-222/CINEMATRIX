// create a rating model
// using mongoose


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ratingSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    ip: {
        type: String,
        required: true
    }
});


const Rating = mongoose.model('MovieRating', ratingSchema);


module.exports = Rating;