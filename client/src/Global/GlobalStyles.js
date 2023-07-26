import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans&family=Rubik+Dirt&family=Sirin+Stencil&display=swap');



*{
        
  
  
}
h1{
  
  font-family: 'Rubik Dirt', sans-serif;
  
}

body{
      font-family: 'Kumbh Sans', sans-serif;
        background-color: ${COLORS.yam};
        /* margin: 5% 5%; */
        

    }
    
    p{
        
        
    }
    span{
        
    }
`;

export default GlobalStyles;
