import { styled } from "styled-components";
import SkillImage from "../../assets/skill.jpg"

export const SkillsContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 3rem;

    //background-image: url(${SkillImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
   
    
    &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
    }

    
    
    h2{
        
        font-size: 3rem;
        
    }
    h2,h3{
        z-index: 1;
    }

    >div{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        justify-content: space-around;
        padding: 4rem;
        
        
       
        gap: 3rem;
        margin-top: 3rem;

        //background: ${(props) => props.theme.primary};
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(15px);
   
    }
    
    

`