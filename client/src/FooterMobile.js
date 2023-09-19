import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";

const FooterMobile = () => {
  return (
    <Wrapper>
      <ImgDiv>
        <ChutesImg
          src="/images/chute-a-film-circle-grey-black.png"
          alt="Chute à films"
        />
        <StyledLink to="http://instagram.com/chuteafilms" target="_blank">
          <StyledAiOutlineInstagram />
        </StyledLink>
      </ImgDiv>
      <TextDiv>
        <P>2210 Mont-Royal Ave E, Montréal, Quebec</P>
        <P>chuteafilms [@] gmail.com</P>
        <P style={{ marginBottom: "0" }}>Call Le Cinoche:</P>
        <P style={{ marginTop: "0" }}>514-585-4546</P>
        <P>
          <StyledLink to="http://robfeulner.com" target="_blank">
            Website created by Rob Feulner
          </StyledLink>
        </P>
      </TextDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ImgDiv = styled.div``;

const ChutesImg = styled.img`
  height: 100px;
  width: 100px;
`;

const StyledAiOutlineInstagram = styled(AiOutlineInstagram)`
  font-size: 6.5em;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  margin-bottom: 1%;
  text-align: right;
  font-size: 1em;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default FooterMobile;
