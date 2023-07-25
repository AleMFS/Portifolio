import { styled } from "styled-components";

export const ProjectCardContainer = styled.div`
    position: relative;
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
    background-color: ${(props) => props.theme.bgcard};
    
    overflow: hidden;
    z-index: 2;

    &:hover{       
        
        transition: box-shadow 0.5s;
        transition-delay: 0.8s;
        box-shadow: 0px 0px 8px 4px ${(props) => props.theme.secondary};
    
    }
    
    
    

    

    >img{
        width: 100%;
        border-radius: 20px;
    }

    span{
        font-size:0.8rem ;
        margin-top: 0.5rem;
        color: ${(props) => props.theme.secondary};
        
    }
    h4{
        font-size: 1.5rem;
        margin: 0.25rem 0 1rem;
    }
    p{
        font-weight: 400;
        margin-bottom: 1.125rem;
        display: -webkit-box;
    -webkit-line-clamp: 4; /* Defina o número máximo de linhas desejado */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 6.5em;
        
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
        color: ${(props) => props.theme.primary};
        margin: 0.5rem 0;
        

        svg{
            color: ${(props) => props.theme.secondary};
            transition: all 0.5s;
        }
        &:hover{
           
            svg{
                transform: translatex(10px);
            }
            
        }

       
    }

    

      
    

    .ballsD{
        position: absolute;
        bottom: 0.5626rem;
        right: -1.56rem;
        width: 8rem;
               
    }
    .ballsL{
        position: absolute;
        bottom: 0.5626rem;
        right: -1.56rem;
        width: 8rem;        
        
    }

    ${props => props.theme.mode === 'dark' &&`

    .ballsD{
    position: absolute;
    bottom: 0.5626rem;
    right: -1.56rem;
    width: 8rem; 
    filter: invert(1); 
    }       
  

    `}


    
   

`