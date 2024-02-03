import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width:1160px) {
            font-size: 87.5%;
        }
        @media (max-width:1024px) {
            font-size: 67%;
        }
       

    }

    body{
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.primary};
        font-family: 'Jost', sans-serif;
        transition: .5s;
        font-size: 1rem;
        //padding: 2rem 3rem;
        overflow-x: hidden;
        

       
        
    }

`

