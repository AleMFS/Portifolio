import { styled } from "styled-components";

export const AboutMeContainer = styled.section`
    
    display: flex;
    justify-content: space-between;  

    margin-top: 5rem;
    margin-left: 3rem;

  

    .perfil {
        
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: end;
       
    }
    .photo{
        width: 36.875rem;
        position: relative;
    }
    .orb{
        width: 3.75rem;
        position: absolute;        
        top: 5.3125rem;
        right: 9.8125rem;


        
        font-size: 3rem;
        animation-name: arrows;        
        animation-iteration-count: infinite;
        animation-duration: 5s;
        filter: drop-shadow( 0px 0px 8px 4px) ${(props) => props.theme.secondary};       
        
    }
  
        
    @keyframes arrows {
        0%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(-35px);
        }
        100%{
            transform: translateY(0px);
        }
    }


    // Media Queries

    @media (min-width: 1500px) {

        .perfil{
            margin-right: 12%;

        }
        .photo{
             width:41.75rem;
         }
    }
    @media (max-width:800px){
        display: none;
    }

    

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


export const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    color: ${(props) => props.theme.primary};

    @media (min-width:801px) {
        display: none;
    }
    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1;
    }
    span{
        color: ${(props) => props.theme.secondary};
    }


    p{
        font-size: 14px;
        font-weight: bold;
    }
    h2{
        font-size: 50px;
    }
    h4{
        margin-top: 10px;
        font-size: 14px;
    }

    .resumo{
        margin-top: 2rem;
        max-width: 315px;
        text-align: center;
        line-height: 1.7;
        font-size: 12px;
    }

    .perfil{
        margin-top: 2rem;
        position: relative;

        .foto{
            width: 230px;
        }
        .globo{
            width: 30px;
            position: absolute;
            top: 12px;
            right: 58px;

            animation-name: orbe;        
            animation-iteration-count: infinite;
            animation-duration: 5s;
            filter: drop-shadow( 0px 0px 8px 4px) ${(props) => props.theme.secondary}; 


        }

             
        @keyframes orbe {
        0%{
            transform: translateY(10px);
        }
        50%{
            transform: translateY(-15px);
        }
        100%{
            transform: translateY(10px);
        }
    }

    
    }
    .socialMedia{
        margin-top: 1rem;
        gap: 1rem;



        .links{
            display: flex;
            gap: 1.75rem;       
        }
        .links a{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.7rem;
            
            text-decoration: none;
            color: ${(props) => props.theme.secondary};
            transition: .5s;
        }
        >a{
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border: 2px solid ${(props) => props.theme.primary};
            border-radius: 25px;
            color: ${(props) => props.theme.secondary};
            text-decoration: none;
            transition:  .5s;
            
            &:hover{
                background: ${(props) => props.theme.primary};
            }
        } 
        a:hover{
            
            
        }
       
    }
    



`