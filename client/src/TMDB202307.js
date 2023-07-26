import { useState, useEffect } from "react";
import { styled } from "styled-components";

const TMDB202307 = () => {
  const [moviesData, setMoviesData] = useState([]);
  const apiKey = "eeff139518613f240efb936f2ffda51c";

  const movies = [
    {
      category: "Blue Skies",
      films: [
        {
          movieId: "9894",
          lang: "English",
        },
        {
          movieId: "733516",
          lang: "Français",
        },
      ],
    },
    {
      category: "Aliens",
      films: [
        {
          movieId: "9892",
          lang: "English",
        },
        {
          movieId: "9898",
          lang: "Français",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedMovies = await Promise.all(
          movies.map(async (category) => {
            const updatedFilms = await Promise.all(
              category.films.map(async (film) => {
                const response = await fetch(
                  `https://api.themoviedb.org/3/movie/${film.movieId}?api_key=${apiKey}`
                );
                const data = await response.json();
                if (response.ok) {
                  const { poster_path, overview, title, release_date, id } =
                    data;
                  const year = release_date ? release_date.slice(0, 4) : "";
                  return {
                    ...film,
                    posterPath: poster_path,
                    overview,
                    title,
                    year,
                    id,
                  };
                } else {
                  throw new Error("Failed to fetch movie details");
                }
              })
            );
            return {
              ...category,
              films: updatedFilms,
            };
          })
        );
        setMoviesData(updatedMovies);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movies, apiKey]);

  return (
    <Wrapper>
      {moviesData.map((category) => (
        <div key={category.category}>
          <H1>{category.category}</H1>
          {category.films.map((film) => (
            <MovieBorder key={film.movieId}>
              <MovieDiv>
                <BorderWrapper>
                  <PosterDiv>
                    <PosterImg
                      src={`https://image.tmdb.org/t/p/w500${film.posterPath}`}
                      alt="Movie Poster"
                    />
                  </PosterDiv>
                </BorderWrapper>
                <BorderWrapper2>
                  <DescriptionDiv>
                    <H2>
                      {film.title} ({film.year})
                    </H2>
                    <P>{film.overview}</P>
                  </DescriptionDiv>
                </BorderWrapper2>
              </MovieDiv>
            </MovieBorder>
          ))}
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 5em;
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 2.5em;
`;

const P = styled.p`
  font-size: 1.5em;
`;

const MovieDiv = styled.div`
  display: flex;
  max-width: 60%;
  margin: auto;
  gap: 10%;
  margin-bottom: 3%;
  border: 4px dotted black;
  padding: 1%;
  transform: skewX(-3deg);
  /* z-index: 10; */
  &:hover {
    /* transform: skewX(-25deg); */
    border: 4px dashed blue;
    /* background-color: antiquewhite; */
  }
`;

const MovieBorder = styled.div`
  position: relative;
  /* z-index: -5; */
`;

const BorderWrapper = styled.div`
  transform: skewY(-15deg);
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 4px dotted red;
    transform: skewX(25deg);
    z-index: -1;
  }
  &:hover {
  }
`;

const BorderWrapper2 = styled.div`
  transform: skewX(-10deg);
  padding: 2%;
  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 4px dashed darkgreen;
    transform: skewX(-6deg);
    z-index: -1;
  }
  &:hover {
    background-color: rgba(255, 0, 0, 0.2);
  }
`;

const PosterDiv = styled.div`
  padding: 8%;
  border: 4px dashed antiquewhite;
  transform: skewY(0deg);

  &:hover {
    background-color: rgba(255, 0, 0, 0.2);
  }
`;

const DescriptionDiv = styled.div`
  border: 4px dashed antiquewhite;
  transform: skewX(16deg);
  padding: 3%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 10);
`;

const PosterImg = styled.img`
  max-height: 400px;
  border-radius: 10%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 10);
`;

export default TMDB202307;
