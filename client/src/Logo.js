import styled from "styled-components";

const Logo = () => {
  return (
    <>
      <Wrapper>
        <RedBackground />
        <BlueBackground />
        <Img src="/images/vcr-logo-1600-bitmap02.png" alt="Chute à films" />
      </Wrapper>
    </>
  );
};
const backgroundTransitionTime = "1.5s"; // Adjust the transition time here (e.g., 0.3s, 500ms, etc.)

const Wrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  /* width: 100vw; */
  position: absolute;
  top: 0px;
  z-index: 1;
  pointer-events: none;
  margin-bottom: 5%;
  @media only screen and (min-width: 768px) {
    /* For desktop */
    width: 98.5vw;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile */
    width: 100vw;
    margin-bottom: 0;
  }
`;

const RedBackground = styled.div`
  width: 100vw;
  height: 50vh;

  top: 0px;
  transform-origin: top left;
  transform: skew(-20deg); /* Adjust the angle as per your requirement */

  background-color: #c90000;
  z-index: 0;
  transition: background-color ${backgroundTransitionTime};
  &:hover {
    background-color: darkgreen;
  }
  @media only screen and (min-width: 768px) {
    /* For desktop */
    width: 98vw;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile */
    height: 10vh;
  }
`;

const BlueBackground = styled.div`
  position: absolute;
  /* width: 80vw; */
  height: 50vh;
  left: 20%;
  top: 8%;
  transform-origin: bottom right;
  transform: skew(20deg); /* Adjust the angle as per your requirement */

  background-color: antiquewhite;
  z-index: 0;
  transition: background-color ${backgroundTransitionTime};

  &:hover {
    background-color: #0600ff;
  }
  @media only screen and (min-width: 768px) {
    /* For desktop */
    width: 77vw;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile */
    width: 60vw;
    height: 14vh;
    left: 40%;
  }
`;

export default Logo;
