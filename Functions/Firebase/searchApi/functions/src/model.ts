import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cinematrix: mongoose.Schema = new Schema({
  movie: {
    type: String,
    required: true,
  },
});

export default mongoose.model("cinematrix", cinematrix);
