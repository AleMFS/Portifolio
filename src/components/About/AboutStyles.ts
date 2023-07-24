import { styled } from "styled-components";

export const AboutContainer = styled.header`
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    

    .arrow{
        font-size: 3rem;
        animation-name: arrows;        
        animation-iteration-count: infinite;
        animation-duration: 2s;
        
    }
    @keyframes arrows {
        0%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(15px);
        }
        100%{
            transform: translateY(0px);
        }
    }

    

`

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
      
    

    img{
        width: 5.5rem;        
    }    

 

`

export const Navigation = styled.div`

display: flex;
align-items: center;
gap: 6rem;



nav{
        display: flex;
        gap: 2rem;

    li {
        list-style: none;
        font-size: 1.5rem;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: color 0.3s ease-in-out, border-width 0.3s ease-in-out;
        padding-bottom: 0.5rem;
        }

    li::before {
        content: '';
        position: absolute;
        bottom: 0;       
        width: 0;
        height: 4px;
        background-color: ${(props) => props.theme.secondary};
        transition: width 0.3s ease-in-out;
        }

    li:hover {
        color: ${(props) => props.theme.secondary};
        }

    li:hover::before {
        width: 100%;
        left: 0;
        }     
    }
    
    svg:hover{
            color: ${(props) => props.theme.secondary};
            
            cursor: pointer;
        }

`