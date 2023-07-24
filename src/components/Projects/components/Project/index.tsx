import { ProjectCardContainer } from "./styles";
import LOL from "../../../../assets/LOL.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import balls from "../../../../assets/shape-2.png"

export function ProjectCard() {
    return (
        <ProjectCardContainer>
            <img src={LOL} alt="" />
            <span>REACT</span>
            <h4>Project LOL</h4>
            <p className="teste"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. et, consectetur adipisicing elit. 
            </p>

            <a href="">
                Link
                <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>

            </a>
            <a href="">
                Ver repositório
                <FontAwesomeIcon icon={faGithub} ></FontAwesomeIcon>
                </a>

            <div>
                <img src={balls} alt="" className="ballsD"/>
            </div>


        </ProjectCardContainer>
    )
}