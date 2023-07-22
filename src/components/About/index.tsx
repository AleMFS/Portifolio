import { AboutContainer, HeaderContainer, Navigation } from "./AboutStyles";
import { Sun, Moon } from '@phosphor-icons/react'
import LogoL from '../../assets/ASL.png'
import LogoD from '../../assets/AS.png'
import { useState } from "react";
import { AboutMe } from "./components/AboutMe";

interface ChangeTheme {
    themeToggler: () => void
}

export function About({ themeToggler }: ChangeTheme) {
    const [theme, setTheme] = useState('dark');

    const handleChangeTheme = () => {
        themeToggler()
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <AboutContainer>
            <HeaderContainer>
                <img src={theme === 'dark' ? LogoD : LogoL} alt="" />
                <Navigation>
                    <nav>
                        <li>Sobre</li>
                        <li>Habilidades</li>
                        <li>Projetos</li>
                        <li>Contato</li>
                    </nav>

                    {theme === 'dark' ?
                        <Sun size={50} onClick={() => handleChangeTheme()} />
                        :
                        <Moon size={50} onClick={() => handleChangeTheme()} />
                    }

                </Navigation>
            </HeaderContainer>
            <AboutMe />
        </AboutContainer>
    )
}