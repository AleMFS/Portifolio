import { FooterContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export function Footer() {
    return (
        <FooterContainer>
            <div className="contact">
                <div className="links">
                    <a href="https://github.com/AleMFS" target="_blank">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                    <a href="https://www.linkedin.com/in/alexandremfs/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                    <h3>Email: Alexandre_MFS@outlook.com</h3>
                </div>
                <p>Desenvolvido por <span> Alexandre Santos </span></p>
            </div>


        </FooterContainer>
    )
}