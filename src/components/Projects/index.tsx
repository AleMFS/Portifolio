
import { ProjectCard } from "./components/Project";
import { ProjectContainer } from "./styles";
import {projects} from '../../assets/Data'

export function Project() {
    return (
        <ProjectContainer id="Projetos" >
            <h2>Projetos</h2>

            <div className="Cards">

                {projects.map((project) =>(
                    <div className="container" key={project.id}>
                        <ProjectCard project={project}/>
                    </div>
                ))}
            
                
                
               
            </div>
        </ProjectContainer>
    )
}