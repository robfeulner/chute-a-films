import styled from "styled-components";
import { Link } from "react-router-dom";

const IntroText = () => {
  return (
    <Wrapper>
      <H1Header>CHUTES à FILMS is a video store within a video store.</H1Header>
      <H2>
        Located inside Montréal's only standing video rental store LA CINOCHE,
        Chute à films offers a monthly curated VHS selection from our personal
        library. New retro titles appear every month.
      </H2>
      {/* <H2>
        <StyledLink to="http://instagram.com/chutesafilmes" target="_blank">
          Follow the Instagram page for constant updates!
        </StyledLink>
      </H2> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 10% 0 10%;
  text-align: center;

  @media only screen and (max-width: 768px) {
    /* For mobile */
    margin: 4% 7% -4% 7%;
  }
`;

const H1Header = styled.h1`
  font-size: 4em;
  font-family: "Rubik Dirt", cursive;

  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 1.5em;
    margin-top: -15%;
  }
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 3em;
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 0.7em;
  }
`;

const StyledLink = styled(Link)`
  color: black;
`;

export default IntroText;
