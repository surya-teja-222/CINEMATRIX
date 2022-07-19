import * as functions from "firebase-functions";
import express = require("express");
// cors
import cors = require("cors");
import schema from "./model";

import mongoose from "mongoose";

const app = express();

// configure cors
// set access control allow origin to cinematrix.subzeroo.tech
app.use(cors({ origin: "*" }));

app.get("/", async (req, res) => {
  // checking if the database is connected
  if (!mongoose.connection.readyState) {
    // checking environment variable for mongo connection
    if (typeof process.env.MONGODB_URI !== "undefined") {
      // connecting to mongo
      mongoose.connect(process.env.MONGODB_URI);
    } else {
      console.log("MongoDB URI not defined");
    }
  }

  // get uri parameter
  const movie: string = req.query.movie || req.body.movie || "";
  if (movie === "") {
    res.status(400).send("Movie parameter is required");
    return;
  }

  // get the movie from the database
  const movies = await schema
    .find({
      movie: { $regex: movie, $options: "i" },
    })
    .limit(5);

  // from movies array, get only movie name and store in array
  const movieNames = movies.map((movie) => movie.movie);

  // send response
  res.send(movieNames);
});

export const getMoives = functions.region("asia-south1").https.onRequest(app);

// export const getMoives = functions.https.onRequest(app);
