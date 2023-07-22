import { styled } from "styled-components";

export const AboutMeContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

`

export const Resume = styled.div`
    max-width: 45%;
    //text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    letter-spacing: .05rem;
    font-weight: 700;
    line-height: 1.2;

    span{
            color: ${(props) => props.theme.secondary};
        }

    h2{
        font-size: 4.5rem;  
        line-height:1;
       

       
    }
    h4{
        color: ${(props) => props.theme.secondary};
        font-size: 1.3rem;
        
    }
    h5{
        font-size: 1.5rem;
    }
    p{
        margin-top:2rem ;
        font-weight: 400;
        font-size: 1.2rem;
        max-width: 650px;
        text-align: start;
    }

    .socialMedia{
        display: flex;
        align-items: center;
        gap: 3rem;
        margin-top: 1rem;

        .links{
            display: flex;
            gap: 2rem;
        }

        .links a{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            border: 2px solid ${(props) => props.theme.primary};
            border-radius: 999px;
            width: 3.2rem;
            height: 3.2rem;
            text-decoration: none;
            color: ${(props) => props.theme.secondary};
            transition: .5s;
        }
        >a{
            display: flex;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border: 2px solid ${(props) => props.theme.primary};
            border-radius: 15px;
            color: ${(props) => props.theme.secondary};
            text-decoration: none;
            transition:  .5s;
            
            
        }     

        a:hover{
            background: ${(props) => props.theme.primary};
        }
    }  


       

    
`