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

    ::-webkit-scrollbar {
    width: .8rem;
  }
  ::-webkit-scrollbar-track {
    background: #CCC;
  }
  ::-webkit-scrollbar-thumb {
    border-bottom-left-radius:2rem;
    border-bottom-right-radius:2rem;
    background: #0ca5d4;
  }

`

