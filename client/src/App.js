import GlobalStyles from "./Global/GlobalStyles";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div``;

export default App;
