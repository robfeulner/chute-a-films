require("dotenv").config();

// const axios = require("axios");
const fetch = require("node-fetch");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWZmMTM5NTE4NjEzZjI0MGVmYjkzNmYyZmZkYTUxYyIsInN1YiI6IjYwZjVmY2MzNTM4NjZlMDA0NjY4M2U5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e3WCXYLBn4RB3jttvoIHU1EmeQ5FRz_gCiQoKq0evS4",
  },
};
("use strict");

// const getMovieDetails = async (req, res) => {
//   const movieId = req.params.id;
//   const apiKey = "eeff139518613f240efb936f2ffda51c";

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
//     );
//     const data = await response.json();
//     const { poster_path, overview, original_title, release_date } = data;

//     // Extract year from release date
//     const year = release_date ? release_date.slice(0, 4) : "";
//     const title = original_title;

//     res.status(200).json({
//       status: 200,
//       posterPath: poster_path,
//       overview,
//       title,
//       year,
//     });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ status: 500, error: "Failed to fetch movie details" });
//   }
// };

// const getMovieDetails = async (req, res) => {
//   const movieId = req.params.id;
//   const apiKey = "eeff139518613f240efb936f2ffda51c";

//   try {
//     const response = await axios.get(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
//     );
//     const { poster_path, overview, original_title, release_date, id } =
//       response.data;

//     // Extract year from release date
//     const year = release_date ? release_date.slice(0, 4) : "";
//     const title = original_title;

//     res.status(200).json({
//       status: 200,
//       posterPath: poster_path,
//       overview,
//       title,
//       year,
//       id,
//     });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ status: 500, error: "Failed to fetch movie details" });
//   }
// };

const getMovieDetails = async (req, res) => {
  const movieId = req.params.id;
  const apiKey = "eeff139518613f240efb936f2ffda51c";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    const data = await response.json();
    const { poster_path, overview, original_title, release_date, id } = data;

    // Extract year from release date
    const year = release_date ? release_date.slice(0, 4) : "";
    const title = original_title;

    res.status(200).json({
      status: 200,
      posterPath: poster_path,
      overview,
      title,
      year,
      id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: 500, error: "Failed to fetch movie details" });
  }
};

module.exports = {
  getMovieDetails,
};

module.exports = {
  getMovieDetails,
};
