import { styled } from "styled-components";

export const SkillContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    width: 10rem;
    height: 4rem;

    border: 2px solid ${(props)=> props.theme.secondary};
    border-radius: 25px;
    padding: 1rem;
    transition: box-shadow .3s;
    transition: background-color .7s;
    font-weight: bold;
    
    

    img{
        width: 2rem;
        
       
    }
    &:hover{
        
        box-shadow: 0px 0px 7px 4px rgba(50,146,248,0.73);
        background: #f1ece5;
        color: black;
    }

    
    // Media Queries

    @media(max-width:800px){

        width: 12rem;

        img{
            width: 2rem;
        }
        p{
            font-size: 1.2rem;
        }
    }

`