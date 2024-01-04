const router = require("express").Router();


const Movies = require("../models/movies");

router.post("/movies", async (req, res) => {
  const dataMovies = req.body;
  await Movies.sync();
  const createMovie = await Movies.create({
    movie_name: dataMovies.movie_name,
  
  });
  res.status(201).json({
    ok: true,
    status: 201,
    message: "Movie Created",
  });
  console.log("NUEVA PELI", createMovie);
});

module.exports = router;