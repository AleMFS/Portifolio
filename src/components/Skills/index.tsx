import { SkillsContainer } from "./Styles";
import {tools} from "../../assets/Data"
import { Skill } from "./components/Skill";
import SkillImage from "../../assets/skill.jpg"

interface themeProps {
    theme: string
}

export function Skills({theme}:themeProps) {

    const imagem = theme === "dark" ? SkillImage : "";
    return (
        <SkillsContainer style={{backgroundImage:`url(${imagem})`}}>
            <h2>Meus conhecimentos</h2>
            <h3>Habilidades / Ferramentas</h3>
            <div>
                {tools.map((skill,index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </div>

        </SkillsContainer>
    )
}