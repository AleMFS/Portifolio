import { ProjectCardContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import balls from "../../../../assets/shape-2.png"




interface project{
    project: projectProps
}

interface projectProps {
    id:number;
    name:String;
    about:string;
    img:string;
    tag:string;
    repository:string
    link:string

}

export function ProjectCard({project}:project) {
    
    return (
        <ProjectCardContainer>
            <img src={project.img} alt="" />
            <span>{project.tag}</span>
            <h4>{project.name}</h4>
            <p className="teste" > {project.about} </p>

            <a href={project.link} target="_blank">
                Link
                <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>

            </a>
            <a href={project.repository} target="_blank">
                Ver repositório
                <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                </a>

            <div>
                <img src={balls} alt="" className="ballsD"/>
            </div>


        </ProjectCardContainer>
    )
}