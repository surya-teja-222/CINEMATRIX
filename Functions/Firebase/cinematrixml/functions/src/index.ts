import * as functions from "firebase-functions";

// import express
import * as express from "express";
import * as cors from "cors";
// DB
import * as mongooose from "mongoose";
import movie from "./movie";

const app = express();

app.use(cors({ origin: true }));

(async () => {
  await mongooose.connect(process.env.MONGO_URI);
})();

async function handleRequest(
  req: express.Request,
  res: express.Response,
  type: "knn" | "svd" | "item"
) {
  const name = req.query.name;
  res.setHeader("Content-Type", "application/json");
  if (name) {
    // check if mongoose us still connected
    if (mongooose.connection.readyState !== 1) {
      (async () => {
        await mongooose.connect(process.env.MONGO_URI);
      })();
    }

    // find for a movie
    await movie
      .findOne({ name: name, type: type })
      .then((data) => {
        if (data !== null) {
          res.send(
            JSON.stringify({
              movie: data.movie,
              title: data.title,
            })
          );
          return;
        } else {
          res.send(
            JSON.stringify({
              message: "Movie not found",
            })
          );
          return;
        }
      })
      .catch((err) => {
        res.send(
          JSON.stringify({
            movie: [],
            title: [],
          })
        );
        return;
      });
  } else {
    res.status(400).send(
      JSON.stringify({
        status: "Error",
        message: "Pass all the required parameters",
      })
    );
  }
}

// create 3 routes knn  ,svd, item
app.get("/knn", (req, res) => {
  handleRequest(req, res, "knn");
});
app.get("/svd", (req, res) => {
  handleRequest(req, res, "svd");
});
app.get("/item", (req, res) => {
  handleRequest(req, res, "item");
});
app.post("/knn", (req, res) => {
  handleRequest(req, res, "knn");
});
app.post("/svd", (req, res) => {
  handleRequest(req, res, "svd");
});
app.post("/item", (req, res) => {
  handleRequest(req, res, "item");
});

exports.mv = functions.https.onRequest(app);
