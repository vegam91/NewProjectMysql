const express = require("express");
const morgan = require("morgan");
const router = require("../routes/movie")
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("this is my app ");
});
app.use(express.json())
app.use("/api/v1", router);

module.exports = app;