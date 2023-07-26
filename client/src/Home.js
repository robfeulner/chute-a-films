import styled from "styled-components";
import IntroText from "./IntroText";
import Logo from "./Logo";
import TMDB202307 from "./TMDB202307";
import Map from "./Maps/Map";
import GlobalStyles from "./Global/GlobalStyles";

const Home = () => {
  const location = {
    address: "2210 Mont-Royal Ave E, Montreal, Quebec H2H 1K4",
    lat: 45.53726279045334,
    lng: -73.57072585397076,
  };

  return (
    <Wrapper>
      <Logo />
      <IntroText />
      <TMDB202307 />
      <Map location={location} zoomLevel={17} />
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
