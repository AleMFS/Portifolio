import { SkillContainer } from "./styles";

interface DataProps {
    skill: toolsProps
}
interface toolsProps {
    id: number;
    name: string;
    img: string
}

export function Skill({ skill }: DataProps) {
    return (
        <SkillContainer>
            <img src={skill.img} alt="" className={skill.name}/>
            <p>{skill.name}</p>
        </SkillContainer>
    )
}
