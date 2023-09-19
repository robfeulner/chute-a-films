import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleHover = () => {
    setIsRotating(!isRotating);
  };

  return (
    <Wrapper>
      <ChutesImgDiv onMouseEnter={handleHover} onMouseLeave={handleHover}>
        {/* <ChutesBorder></ChutesBorder> */}
        {/* <Img
          src="/images/chute-a-film-circle-grey-black.png"
          alt="Chutes à films"
          isRotating={isRotating}
        /> */}
        <StyledLink to="http://instagram.com/chuteafilms" target="_blank">
          <AiOutlineInstagramStyled isRotating={isRotating} />
        </StyledLink>
      </ChutesImgDiv>

      <P>chuteafilms [@] gmail.com</P>
      <P>Call Le Cinoche: 514-585-4546</P>
      {/* <RobBorder></RobBorder> */}
      <RobImgDiv onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <Link to="http://robfeulner.com" target="_blank">
          <RobImg
            src="/images/bleunuitvideo03.png"
            alt="Rob Feulner"
            isRotating={isRotating}
          />
        </Link>
      </RobImgDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5% 2% 5%;
  align-items: center;

  @media only screen and (max-width: 768px) {
    /* For mobile */
    width: auto;
    margin: 0 0 2% 0;
    gap: 3%;
  }
`;

const ChutesImgDiv = styled.div``;

const RobImgDiv = styled.div``;

const ChutesBorder = styled.div`
  position: absolute;
  margin-top: -1%;
  margin-left: -1.5%;
  height: 15%;
  width: 8%;
  z-index: 0;
  &:hover {
    border: 2px dotted red;
    transform: skewX(25deg);
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const AiOutlineInstagramStyled = styled(AiOutlineInstagram)`
  font-size: 6em;
  /* position: absolute; */
  /* z-index: 5; */
  transition: transform 0.3s ease;

  /* Apply the rotation when the component is hovered */
  ${({ isRotating }) =>
    isRotating &&
    `
    transform: rotate(360deg);
  `}
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 4em;
  }
`;

const Img = styled.img`
  height: 100px;
  /* position: absolute; */
  /* z-index: 5; */
  transition: transform 0.3s ease;

  /* Apply the rotation when the component is hovered */
  ${({ isRotating }) =>
    isRotating &&
    `
    transform: rotate(360deg);
  `}
  @media only screen and (max-width: 768px) {
    /* For mobile */
    height: 50px;
  }
`;

const P = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  transition: 0.5s;
  &:hover {
    color: red;
    text-decoration: line-through;
  }
  @media only screen and (max-width: 768px) {
    /* For mobile */
    font-size: 1em;
  }
`;

const RobBorder = styled.div`
  position: absolute;
  margin-top: -0.5%;
  margin-left: 83%;
  height: 15%;
  width: 8%;
  z-index: 0;
  &:hover {
    border: 2px dotted red;
    transform: skewX(-25deg);
  }
`;

const RobImg = styled.img`
  height: 100px;

  transition: transform 0.3s ease;

  /* Apply the rotation when the component is hovered */
  ${({ isRotating }) =>
    isRotating &&
    `
  transform: rotate(360deg);
`}
  @media only screen and (max-width: 768px) {
    /* For mobile */
    height: 50px;
  }
`;

export default Footer;
