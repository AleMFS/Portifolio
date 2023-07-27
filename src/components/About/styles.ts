import { styled } from "styled-components";

export const AboutContainer = styled.header`
    display: flex;
    flex-direction: column;
    
    position: relative;
    
    

   /* .arrow{
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
    }*/
    

    .scroll-header {
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    animation: header_animate 0.8s var(--transition) 0s forwards;
    z-index: 999;
    color: white;


    // Media queries
    
   
    }

    @media (max-width:800px){

    .arrow{
        font-size: 1.5rem;
        margin-top: 1rem;
        
    }

}


`

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    transition: all 0.5s;
    position: relative;
    
      
    

    img{
        width: 5.5rem;     
        cursor   : pointer;
    }    

   
    
       
    
`

export const Navigation = styled.div`

@media (max-width:800px) {
    display   :none ;
}

display: flex;
align-items: center;
gap: 6rem;
position: relative;

button{
    display: none;
}

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
        .active::before{
            width: 100%;
            left: 0;
            
        }   
        

     
    }
    
    svg:hover{
            color: ${(props) => props.theme.secondary};
            
            cursor: pointer;
        }

    

   

`

export const NavigationMobile = styled.div`

    @media (min-width:800px) {
        display: none;
    }

    display: flex;
    gap: 2rem;


    .open{
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9 ;
        transition: all 0.5s;

        >svg{
            display: none;
        }

        nav{
        position: relative;

        width: 210px;
        height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${(props )=> props.theme.bgcard};
        
        gap: 1rem;

            li {
                list-style: none;
                font-size: 2rem;
               
                cursor: pointer;
                position: relative;
                overflow: hidden;
                transition: color 0.3s ease-in-out, border-width 0.3s ease-in-out;
                padding-bottom: 0.5rem;
                color: ${(props )=> props.theme.primary};

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
                .active::before{
                width: 100%;
                left: 0;

            }   

            button{
                position: absolute;
                top: 17px;
                left: 16px;
                background-color: transparent;
                border: none;
                color: ${(props) => props.theme.primary};
                display: block;

                svg{
                    background-color: transparent;
                    
                }
                

            }
        }
        
    }
    .close{
        display: none;
    }


`