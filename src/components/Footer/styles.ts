import { styled } from "styled-components";

export const FooterContainer = styled.footer`
        width: 85%;
        margin: 6rem auto 4rem;
        border-bottom: 3px solid ${(props) => props.theme.primary};
        
        .contact{
            display: flex;
            justify-content: space-between;
            margin-bottom: 3rem;
        }
        .links{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            font-weight: bold;
            
        }
        svg{
            color: ${(props)=> props.theme.secondary};
            font-size: 2rem;
        }
        p{
            font-size: 1.5rem;
            font-weight: bold;
        }
        span{
            color: ${(props )=> props.theme.secondary};
        }
    

        // Media Queries 

        @media (max-width:800px){

            p{
                font-size: 1.2rem;
            }
            h3{
                font-size: 1rem;
            }
        }

        @media (max-width:800px){
            width: 90%;
            
            p{
                font-size: 1.2rem;
                padding: 0 1.5rem;
            }
            h3{
                font-size: 0.7rem;
            }
        }

   
`