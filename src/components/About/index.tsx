import { AboutContainer, HeaderContainer, Navigation } from "./AboutStyles";
import { Sun, Moon } from '@phosphor-icons/react'
import LogoL from '../../assets/ASL.png'
import LogoD from '../../assets/AS.png'
import { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


interface ChangeTheme {
    themeToggler: () => void
}

export function About({ themeToggler }: ChangeTheme) {
    const [theme, setTheme] = useState('dark');

    const handleChangeTheme = () => {
        themeToggler()
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    // mudar sessão
    const [activeTab, setActiveTab] = useState('Sobre');

    // Função para rolar suavemente para a seção de destino
    const smoothScrollToSection = (sectionId:string) => {
        
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(sectionId);
      }
    };

    

    return (
        <AboutContainer>
            <HeaderContainer>
                <img src={theme === 'dark' ? LogoD : LogoL} alt="" />
                <Navigation>
                    <nav>
                        <li onClick={() => smoothScrollToSection("Sobre")}>Sobre</li>
                        <li onClick={() => smoothScrollToSection("Conhecimentos")}>Conhecimentos</li>
                        <li onClick={() => smoothScrollToSection("Projetos")}>Projetos</li>
                        <li onClick={() => smoothScrollToSection("Contato")}>Contato</li>
                    </nav>

                    {theme === 'dark' ?
                        <Sun size={50} onClick={() => handleChangeTheme()} />
                        :
                        <Moon size={50} onClick={() => handleChangeTheme()} />
                    }

                </Navigation>
            </HeaderContainer>
            <AboutMe />
                        
            <FontAwesomeIcon icon={faChevronDown} size="xl" className="arrow" onClick={() => smoothScrollToSection('Conhecimentos')}></FontAwesomeIcon>        
           
            
            
            
        </AboutContainer>
    )
}