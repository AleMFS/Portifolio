import { styled } from "styled-components";

export const ProjectContainer = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
    .Cards{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 2rem;
    }

    .container{
        width: 362px;
        height: 510px;
        display: grid;
        place-items: center;
        position: relative;            
        border-radius: 20px;    
        overflow: hidden;
        animation-delay: 2s;
        border: 3px solid transparent;
        z-index:1 ;
       
    }
    .container:hover{
        
        transition: box-shadow 0.5s;
        transition-delay: 0.8s;
        box-shadow: 0px 0px 7px 4px rgba(50,146,248,0.73);
    }

    .container::before{
        content: "";
        position: absolute;
        width: 650px;
        height: 180px;
        top: 5px;
        right: 20px;
        transition: 1.9s;
        background-color: rgba(50,146,248,0.73);
        transform: rotate(-45deg) translate(0,-160px);
       
    }
    .container:hover::before{
        animation: cardEffect .9s;
    }

    @keyframes cardEffect {
        100%{
            
            transform: rotate(-45deg) translate(0,600px);
        }
    }

`