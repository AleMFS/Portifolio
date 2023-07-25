import { AboutContainer, HeaderContainer, Navigation } from "./AboutStyles";
import { Sun, Moon } from '@phosphor-icons/react'
import LogoL from '../../assets/ASL.png'
import LogoD from '../../assets/AS.png'
import { useEffect, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


interface ChangeTheme {
    themeToggler: () => void
}

export function About({ themeToggler }: ChangeTheme) {
    const [theme, setTheme] = useState('dark');
    const [scrollNav, setScrollNav] = useState(false);

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
          // Ajuste a posição de rolagem para parar um pouco acima da seção
          const yOffset = -150; // Defina o valor que desejar para ajustar a posição de parada
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setActiveTab(sectionId);
        }
      };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        return () => {
          window.removeEventListener("scroll", changeNav);
        };
      }, []);
    
      const changeNav = () => {
        if (window.scrollY >= 90) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
        updateActiveTabOnScroll(); // Adicionamos a chamada para a função de atualização da navegação ativa ao rolar.
      };
    
      // Função para atualizar o item de menu ativo ao rolar a página
      const updateActiveTabOnScroll = () => {
        const sections = ['Sobre', 'Conhecimentos', 'Projetos', 'Contato'];
    
        // Encontra a seção que está atualmente visível na janela
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight ) {
              setActiveTab(sectionId);
              break;
            }
          }
        }
    
    }
    

    return (
        <AboutContainer id="Sobre">
            <HeaderContainer  className={`${scrollNav ? "scroll-header" : ""}`}>
                <img src={theme === 'dark' ?  LogoD : scrollNav ? LogoD : LogoL} alt="" />
                <Navigation>
                    <nav>
                        <li onClick={() => smoothScrollToSection("Sobre")} className={activeTab === "Sobre" ? 'active': ''} >Sobre</li>
                        <li onClick={() => smoothScrollToSection("Conhecimentos")} className={activeTab === "Conhecimentos" ? 'active': ''}>Conhecimentos</li>
                        <li onClick={() => smoothScrollToSection("Projetos")} className={activeTab === "Projetos" ? 'active': ''}>Projetos</li>
                        <li onClick={() => smoothScrollToSection("Contato")} className={activeTab === "Contato" ? 'active': ''}>Contato</li>
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