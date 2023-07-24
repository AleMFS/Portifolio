import { styled } from "styled-components";

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: flex-start;
    color: ${(props) => props.theme.primary};
   
    padding: 1rem ;
    max-width: 350px;
    height: 500px;
    font-weight: bold;
    border-radius: 20px;
    background-color: ${(props ) => props.theme.bgcard};
    
    overflow: hidden;
    z-index: 2;
    
    
    

    

    img{
        width: 100%;
        border-radius: 20px;
    }

    span{
        font-size:0.8rem ;
        margin-top: 0.5rem;
        color: ${(props ) => props.theme.secondary};
        
    }
    h4{
        font-size: 1.5rem;
        margin: 0.25rem 0 1rem;
    }
    p{
        font-weight: 400;
        margin-bottom: 1.125rem;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: white;
        margin: 0.5rem 0;

        svg{
            color: ${(props)=> props.theme.secondary};
        }
    }


    
   

`