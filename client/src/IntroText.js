import styled from "styled-components";

const IntroText = () => {
  return (
    <Wrapper>
      <H1>CHUTES à FILMS is a video store within a video store.</H1>
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

const H1 = styled.h1`
  font-size: 4em;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 3em;
`;

export default IntroText;
