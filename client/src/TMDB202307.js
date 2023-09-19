import { useState, useEffect } from "react";
import { styled } from "styled-components";

const TMDB202307 = () => {
  const [moviesData, setMoviesData] = useState([]);
  const apiKey = "eeff139518613f240efb936f2ffda51c";

  const movies = [
    {
      category: "We Live Inside a Dream",
      films: [
        {
          movieId: "10131",
          lang: "English",
        },
        {
          movieId: "97640",
          lang: "Français",
        },
        {
          movieId: "49343",
        },
      ],
    },
    {
      category: "Defund the Police Procedural",
      films: [
        {
          movieId: "31701",
          lang: "English",
        },
        {
          movieId: "12143",
          lang: "Français",
        },
        {
          movieId: "63460",
          lang: "Français",
        },
      ],
    },
    {
      category: "Bleu Nuit Video",
      films: [
        {
          movieId: "572011",
          lang: "English",
        },
        {
          movieId: "733516",
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
  }, []);

  return (
    <Wrapper>
      <H1Month>SEPTEMBER 2023 TITLES</H1Month>
      {moviesData.map((category) => (
        <div key={category.category}>
          <H1Cat key={category.category}>{category.category}</H1Cat>
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

const backgroundTransitionTime = "1.5s"; // Adjust the transition time here (e.g., 0.3s, 500ms, etc.)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media only screen and (max-width: 768px) {
    /* For mobile */
    /* width: 50vw; */
    /* align-items: flex-start; */
    /* margin-left: -6%; */
    margin-top: -15%;
  }
`;

const H1Month = styled.h1`
  font-size: 6em;
  color: red;
  text-align: center;

  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 1.25em;
    text-align: center;
    margin: auto;
  }
`;

const H1Cat = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-bottom: 2%;
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 1em;
    /* margin: 6% 0 16% 0; */
    margin-bottom: 10%;
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-size: 2.5em;
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 0.75em;
    margin-top: -1%;
    margin-bottom: 0;
  }
`;

const P = styled.p`
  font-size: 1.5em;
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 0.5em;
  }
`;

const MovieBorder = styled.div`
  /* position: relative; */

  @media only screen and (max-width: 768px) {
    /* For mobile */
    margin-bottom: 10%;
    margin-left: -31%;
  }
`;

const MovieDiv = styled.div`
  /* DOTTED BLACK BORDER */
  display: flex;
  max-width: 60%;
  margin: auto;
  gap: 10%;
  margin-bottom: 3%;
  border: 4px dotted black;
  padding: 1%;
  transform: skewX(-3deg);
  transition: border ${backgroundTransitionTime};

  @media only screen and (min-width: 768px) {
    /* For desktop */
    max-width: 60%;
    &:hover {
      border: 4px dashed blue;
    }
  }
  @media only screen and (max-width: 768px) {
    /* For mobile */
    width: 60vw;
    height: 20vh;
    border: none;
  }
`;

const BorderWrapper = styled.div`
  /* DOTTED RED BORDER */
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
    @media only screen and (min-width: 768px) {
      /* For desktop */
    }
    @media only screen and (max-width: 768px) {
      /* For mobile */
      border: 2px dotted red;
      transform: skewY(-10deg);
    }
  }
`;

const BorderWrapper2 = styled.div`
  /* DARK GREEN BORDER */
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
    @media only screen and (max-width: 768px) {
      /* For mobile */
      border: 2px dashed darkgreen;
      width: 55vw;
      transform: skewX(-1deg);
    }
  }
  transition: background-color ${backgroundTransitionTime};
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
`;

const PosterDiv = styled.div`
  /* DASHED WHITE POSTER BORDER */
  padding: 8%;
  border: 4px dashed antiquewhite;
  transform: skewY(0deg);
  transition: background-color ${backgroundTransitionTime};
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
  @media only screen and (max-width: 768px) {
    /* For mobile */
    padding: 5%;
    border: 2px dashed antiquewhite;
  }
`;

const DescriptionDiv = styled.div`
  /* DASHED WHITE DESCRIPTION BORDER */
  border: 4px dashed antiquewhite;
  transform: skewX(16deg);
  padding: 3%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 10);
  @media only screen and (max-width: 768px) {
    /* For mobile */
    height: 18vh;
    width: 50vw;
    border: 2px dashed antiquewhite;
    z-index: 1;
  }
`;

const PosterImg = styled.img`
  max-height: 400px;
  border-radius: 10%;
  box-shadow: 0 0 50px rgba(0, 0, 0, 10);
  @media only screen and (max-width: 768px) {
    /* For mobile */
    width: 25vw;
  }
`;

export default TMDB202307;
