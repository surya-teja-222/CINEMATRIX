import * as mongoose from 'mongoose';


const movieData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  movie: [String],
  title: [String],
});

const movie = mongoose.model("movieData", movieData);

// module.exports = movie;

export default movie;