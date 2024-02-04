import styled from "styled-components";

export const SpecializationsContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    
    
    
    h2{
        font-size: 3rem;
        margin-bottom: 2rem;
    }
`

export const CursoContainer = styled.div`
    width:100%;
    margin: 3rem auto;
   
    
    
    display: grid;
    grid-template-columns: 1fr 1fr;
 
    @media (max-width:490px) {

        grid-template-columns: repeat(1,1fr);
    }

`
export const CursoCard = styled.div`
    position: relative;
    margin: 2rem auto;
    
    
    


   
`
export const TitleCard = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    h3{  
        font-size: 1.4rem;
        text-align: center;
    }
    svg{
        cursor: pointer;
          transition: all 0.3s;
    }
    svg:hover{
        color: ${(props) => props.theme.secondary};
        scale: calc(1.2);
        
    }
`

interface Props {
    open: boolean
}

export const InfoContainer = styled.div<Props>`
   
    margin: 1rem 2rem 1rem 2rem;
    max-width: 75%;
    
    border-left: 2px solid ${(props) => props.theme.primary};
    overflow: hidden;
    max-height: ${(props) => (props.open ? '500px' : '0')};
    transition: max-height 0.5s ease-in-out;

`
export const InfoCard = styled.div`
    
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
`
export const InfoTexts = styled.p`
    font-weight: bold;
    font-size: 1.25rem;
    width: 100%;

    a{
        padding: 0.5rem;
        background-color: ${(props) => props.theme.primary};
        border-radius: 12px;
        text-decoration: none;
        color: ${(props) => props.theme.background};
        transition: all 0.3s;

        &:hover{
            opacity: 0.5;
            
        }
    }
`
export const InfoData = styled.div`
    width: 100%;
`
