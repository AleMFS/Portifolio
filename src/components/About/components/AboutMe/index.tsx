import { AboutMeContainer, Resume } from "./styles";
import CV from '../../../../assets/AlexandreCV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Teste from '../../../../assets/teste.png'
import Orbe from "../../../../assets/orbe2.png"


export function AboutMe() {


    return (
        <AboutMeContainer>
            <Resume>
                <h5>Olá, eu <span>sou</span> </h5>
                <h2><span>Alexandre </span>Santos</h2>
                <h4>Desenvolvedor FullStack </h4>
                <p>Focado em construir minha carreira como Desenvolvedor FullStack, tenho conhecimento em Java e ReactJS.
                    Busco sempre melhorar e alcançar meus objetivos. Estou determinado a alcançar novos níveis de sucesso em minha jornada profissional. </p>
                <div className="socialMedia">
                    <div className="links">
                        <a href="https://github.com/AleMFS" target="_blank">
                            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/alexandremfs/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </a>
                    </div>
                    <a href={CV} download={true}>Download CV  
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </a>                    

                </div>
            </Resume>
            <div className="perfil">
            <img src={Teste} alt="" className="photo"/>
            <img src={Orbe} alt="" className="orb"/>
            </div>
            
        </AboutMeContainer>
    )
}