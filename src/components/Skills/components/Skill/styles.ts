import { styled } from "styled-components";

export const SkillContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    width: 10rem;

    border: 2px solid ${(props)=> props.theme.secondary};
    border-radius: 25px;
    padding: 1rem;
    transition: box-shadow .3s;
    font-weight: bold;
    

    img{
        width: 2rem;
    }
    &:hover{
        
        box-shadow: 0px 0px 7px 4px rgba(50,146,248,0.73);
    }

`