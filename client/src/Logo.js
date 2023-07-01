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

const Wrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100vw;

  position: absolute;

  top: 0px;
  z-index: 1;
  pointer-events: none;
`;

const RedBackground = styled.div`
  width: 100vw;
  height: 685.5px;

  top: 0px;
  transform-origin: top left;
  transform: skew(-20deg); /* Adjust the angle as per your requirement */

  background-color: #c90000;
  z-index: 0;
  &:hover {
    background-color: darkgreen;
  }
`;

const BlueBackground = styled.div`
  position: absolute;
  width: 80vw;
  height: 685.5px;
  left: 20%;
  top: 8%;
  transform-origin: bottom right;
  transform: skew(20deg); /* Adjust the angle as per your requirement */

  background-color: antiquewhite;
  z-index: 0;
  &:hover {
    background-color: #0600ff;
  }
`;

export default Logo;
