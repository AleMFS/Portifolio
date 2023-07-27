import { MobileContainer } from "./styles";
import CV from '../../../../assets/AlexandreCV.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn,faInstagram } from '@fortawesome/free-brands-svg-icons';
import Teste from '../../../../assets/teste.png'
import Orbe from "../../../../assets/orbe2.png"

export function Mobile() {
    return (
        <MobileContainer>
            <p>Olá,<span> eu sou</span></p>
            <div>
                <h2><span>Alexandre</span></h2>
                <h2>Santos</h2>
            </div>
            <h4>Desenvolvedor FullStack</h4>
            <div className="perfil">
                <img src={Teste} alt="" className="foto" />
                <img src={Orbe} alt="" className="globo" />
            </div>
            <p className="resumo">
                Focado em construir minha carreira como Desenvolvedor FullStack, tenho conhecimento em Java e ReactJS.
                Busco sempre melhorar e alcançar meus objetivos. Estou determinado a alcançar novos níveis de sucesso em minha jornada profissional.
            </p>
            <div className="socialMedia">
                <div className="links">
                    <a href="https://github.com/AleMFS" target="_blank">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/alexandremfs/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                    <a href="https://www.instagram.com/ale_mfs1/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                </div>
                <a href={CV} download={true}>Download CV
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>

            </div>

        </MobileContainer>
    )
}