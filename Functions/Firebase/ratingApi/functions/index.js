const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const movieSchema = require("./models/movie");
const platformSchema = require("./models/platform");

const app = express();
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  console.log(process.env.MONGODB_URI);
  res.send("Provide all required parameters");
});

app.post("/app", async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  }
  try {
    const rating = req.query.rating || (req.body && req.body.rating);
    const ip = req.query.ip || (req.body && req.body.ip);
    // create a new rating
    const platformRating = new platformSchema({
      rating,
      ip,
    });
    // save the rating
    await platformRating.save();
    res.json({
      status: 200,
      body: {
        status: "ok",
        message: `Rating ${rating} for app saved.`,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      body: {
        status: "error",
        message: `Error saving rating for app.`,
      },
    });
  }
});

app.post("/movie", async (req, res) => {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  }
  try {
    const rating = req.query.rating || (req.body && req.body.rating);
    const ip = req.query.ip || (req.body && req.body.ip);
    const name = req.query.name || (req.body && req.body.name);
    const ratingg = new movieSchema({
      name,
      rating,
      ip,
    });
    await ratingg.save();
    res.json({
      status: 200,
      body: {
        status: "ok",
        message: `Rating ${rating} for mv by ${ip}`,
      },
    });
  } catch (error) {
    res.send({
      status: 500,
      body: {
        status: "error",
        message: `Error saving rating for mv.`,
      },
    });
  }
});

exports.rate = functions.region("asia-south1").https.onRequest(app);
