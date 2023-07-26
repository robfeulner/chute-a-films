import styled from "styled-components";
import GlobalStyles from "./Global/GlobalStyles";

const IntroText = () => {
  return (
    <Wrapper>
      <H1Header>CHUTES à FILMS is a video store within a video store.</H1Header>
      <H2>
        Located inside Montréal’s only standing video rental store LA CINOCHE,
        Chute à films offers a monthly curated VHS selection from our personal
        library. The selection changes every month, follow the Instagram page
        for constant updates! And this is just dummy text please delete or
        replace bye.
      </H2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10%;
  text-align: center;
`;

const H1Header = styled.h1`
  font-size: 4em;
  font-family: "Rubik Dirt", cursive;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 3em;
`;

export default IntroText;
