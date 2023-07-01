import { useState, useEffect } from "react";

const TMDB202307 = () => {
  const [posterPath, setPosterPath] = useState(null);
  const [overview, setOverview] = useState(null);
  const [title, setTitle] = useState(null);
  const [year, setYear] = useState(null);
  const [id, setId] = useState(null);
  const apiKey = "eeff139518613f240efb936f2ffda51c";
  const movieId = "9894";

  useEffect(() => {
    fetch(`/movie/${movieId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("fuck. 400? 500?");
        } else {
          const { posterPath, overview, title, year, id } = data;
          setPosterPath(posterPath);
          setOverview(overview);
          setTitle(title);
          setYear(year);
          setId(id);
          console.log("you did it you dumb fuck");
        }
      })
      .catch((error) => {
        console.error("shit is wrong");
        console.log(error);
      });
  }, [movieId]);

  console.log(posterPath, overview, title, year, id);

  return (
    <div>
      <h2>
        {title} ({year})
      </h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt="Movie Poster"
      />
      <p>{overview}</p>
    </div>
  );
};

export default TMDB202307;
