import { ProjectCard } from "./components/ProjectCard";
import { ProjectContainer } from "./styles";

export function Project() {
    return (
        <ProjectContainer>
            <h2>Projetos</h2>

            <div className="Cards">
                <div className="container">
                    <ProjectCard />
                </div>
                <div className="container">
                    <ProjectCard />
                </div>
                <div className="container">
                    <ProjectCard />
                </div>
                <div className="container">
                    <ProjectCard />
                </div>
            </div>
        </ProjectContainer>
    )
}