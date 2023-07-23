import { SkillsContainer } from "./Styles";
import {tools} from "../../assets/Data"
import { Skill } from "./components/Skill";

export function Skills() {
    return (
        <SkillsContainer>
            <h2>Meus Conhecimentos</h2>
            <h3>Habilidades / Ferramentas</h3>
            <div>
                {tools.map((skill,index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </div>

        </SkillsContainer>
    )
}