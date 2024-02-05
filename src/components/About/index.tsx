import { AboutContainer, HeaderContainer, Navigation, NavigationMobile } from "./styles";
import { Sun, Moon, List } from '@phosphor-icons/react'
import LogoL from '../../assets/ASL.png'
import LogoD from '../../assets/AS.png'
import { useEffect, useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons'
import { Mobile } from "./components/AboutMe/Mobile";


interface ChangeTheme {
  themeToggler: () => void
}

export function About({ themeToggler }: ChangeTheme) {
  const [theme, setTheme] = useState('dark');
  const [scrollNav, setScrollNav] = useState(false);
  const [hamburguer, setHamburguer] = useState(false)
  const [desactive, setDesactive] = useState('')

  const handleChangeTheme = () => {
    themeToggler()
    theme === "light" ? setTheme("dark") : setTheme("light");
  }



  // mudar sessão
  const [activeTab, setActiveTab] = useState('Sobre');

  // Função para rolar suavemente para a seção de destino
  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Ajuste a posição de rolagem para parar um pouco acima da seção
      const yOffset = -200;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(sectionId);
      handleMenu()
    }
  };

  function scrollToTop() {
    // Verifica se o método 'scrollTo' é suportado pelo navegador
    if ('scrollTo' in window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Caso o método 'scrollTo' não seja suportado, faz um scroll instantâneo
      document.documentElement.scrollTop = 0;
    }
  }

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
    updateActiveTabOnScroll(); // Adiciona a chamada para a função de atualização da navegação ativa ao rolar.
  };

  // Função para atualizar o item de menu ativo ao rolar a página
  const updateActiveTabOnScroll = () => {
    const sections = ['Sobre', 'Conhecimentos', 'Projetos','Cursos', 'Contato'];

    // Encontra a seção que está atualmente visível na janela
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          setActiveTab(sectionId);
          break;
        }
      }
    }

  }

  function limparDiv() {
    setTimeout(() => {
      if (hamburguer) {
        setDesactive('DesativeDiv')
      }     
    }, 500);
  }

  function handleMenu() {
    if(!hamburguer){
      setDesactive('')
    }
    setHamburguer(!hamburguer)

    
    limparDiv()
   


  }


  return (
    <AboutContainer id="Sobre">
      <HeaderContainer className={`${scrollNav ? "scroll-header" : ""}`}>
        <img src={theme === 'dark' ? LogoD : scrollNav ? LogoD : LogoL} alt="" onClick={() => scrollToTop()} />

        < Navigation className="open">
          <nav>
            <button>
              <FontAwesomeIcon icon={faX} size="2x" className="buttonX"></FontAwesomeIcon>
            </button>
            <li onClick={() => smoothScrollToSection("Sobre")} className={activeTab === "Sobre" ? 'active' : ''} >Sobre</li>
            <li onClick={() => smoothScrollToSection("Conhecimentos")} className={activeTab === "Conhecimentos" ? 'active' : ''}>Conhecimentos</li>
            <li onClick={() => smoothScrollToSection("Projetos")} className={activeTab === "Projetos" ? 'active' : ''}>Projetos</li>
            <li onClick={() => smoothScrollToSection("Cursos")} className={activeTab === "Cursos" ? 'active' : ''}>Especializações</li>
            <li onClick={() => smoothScrollToSection("Contato")} className={activeTab === "Contato" ? 'active' : ''}>Contato</li>
          </nav>

          {theme === 'dark' ?
            <Sun size={50} onClick={() => handleChangeTheme()} />
            :
            <Moon size={50} onClick={() => handleChangeTheme()} />
          }
        </Navigation>

        <NavigationMobile>

          <List size={35} onClick={() => handleMenu()} />

          {theme === 'dark' ?
            <Sun size={35} onClick={() => handleChangeTheme()} />
            :
            <Moon size={35} onClick={() => handleChangeTheme()} />
          }

          <div className={`${hamburguer ? 'open' : 'close'} ${desactive}`}>
            <nav>
              <button>
                <FontAwesomeIcon icon={faX} size="2x" className="buttonX" onClick={() => handleMenu()}></FontAwesomeIcon>
              </button>
              <li onClick={() => smoothScrollToSection("Sobre")} className={activeTab === "Sobre" ? 'active' : ''} >Sobre</li>
              <li onClick={() => smoothScrollToSection("Conhecimentos")} className={activeTab === "Conhecimentos" ? 'active' : ''}>Conhecimentos</li>
              <li onClick={() => smoothScrollToSection("Projetos")} className={activeTab === "Projetos" ? 'active' : ''}>Projetos</li>
              <li onClick={() => smoothScrollToSection("Cursos")} className={activeTab === "Cursos" ? 'active' : ''}>Especializações</li>
              <li onClick={() => smoothScrollToSection("Contato")} className={activeTab === "Contato" ? 'active' : ''}>Contato</li>
            </nav>
          </div>

        </NavigationMobile>


      </HeaderContainer>
      <AboutMe />
      <Mobile />

      <FontAwesomeIcon icon={faChevronDown} size="xl" className="arrow" onClick={() => smoothScrollToSection('Conhecimentos')}></FontAwesomeIcon>

    </AboutContainer>
  )
}