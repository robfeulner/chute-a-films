import styled from "styled-components";
import IntroText from "./IntroText";
import Logo from "./Logo";
import TMDB202307 from "./TMDB202307";

const Home = () => {
  return (
    <Wrapper>
      <Logo />
      <IntroText />
      <TMDB202307 />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6em;
  ${Logo} {
    order: 1;
  }
  ${IntroText} {
    order: 2;
  }
`;

export default Home;
