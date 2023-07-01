import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants";

const GlobalStyles = createGlobalStyle`


  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap');


*{
        
    font-family: 'Kumbh Sans', sans-serif;

        
    }
    h1, h2, h3{
        


    }

    body{
        background-color: ${COLORS.yam};
        /* margin: 5% 5%; */
        

    }
    
    p{
        
        
    }
    span{
        
    }
`;

export default GlobalStyles;
