import { CursoCard, CursoContainer, InfoCard, InfoContainer, InfoData, InfoTexts, SpecializationsContainer, TitleCard } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

export function Specializations() {

    const [items, setItems] = useState<{ id: number; isOpen: boolean }[]>([
        { id: 1, isOpen: true },
        { id: 2, isOpen: false },
        { id: 3, isOpen: false },
        { id: 4, isOpen: false },
        { id: 5, isOpen: false },
        { id: 6, isOpen: false },
        // Adicione mais itens conforme necessário
    ]);

    const toggleDiv = (id: number) => {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, isOpen: !item.isOpen } : item
          )
        );
      };

    return (
        <SpecializationsContainer id="Cursos">
            <h2 >Especializações</h2>

            <CursoContainer>
                <CursoCard>
                    <TitleCard onClick={() => toggleDiv(1)}>
                        <h3>Análise e Desenvolvimento de Sistemas</h3>
                        <FontAwesomeIcon icon={faChevronDown}  size="xl" className="arrow" ></FontAwesomeIcon>
                    </TitleCard>
                    <InfoContainer open={items[0].isOpen}>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>

                            <InfoTexts>Faculdade Estácio de Sá</InfoTexts>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts>Início: 06/21</InfoTexts>
                                <InfoTexts>Término: 12/23</InfoTexts>
                            </InfoData>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts><a target="_blank" href="">Certificado</a></InfoTexts>
                            </InfoData>
                        </InfoCard>
                    </InfoContainer>

                </CursoCard>
                <CursoCard>
                    <TitleCard onClick={() => toggleDiv(2)}>
                        <h3>Curso B7web Html e Csst</h3>
                        <FontAwesomeIcon icon={faChevronDown}  size="xl" className="arrow" ></FontAwesomeIcon>
                    </TitleCard>
                    <InfoContainer open={items[1].isOpen}>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>

                            <InfoTexts>B7 Web - Bonieky Lacerda </InfoTexts>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts>Início: 06/21</InfoTexts>
                                <InfoTexts>Término: 10/21</InfoTexts>
                            </InfoData>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts><a target="_blank" href="">Certificado</a></InfoTexts>
                            </InfoData>
                        </InfoCard>
                    </InfoContainer>

                </CursoCard>
                <CursoCard>
                    <TitleCard onClick={() => toggleDiv(3)}>
                        <h3>Curso JavaScript e TypeScript</h3>
                        <FontAwesomeIcon icon={faChevronDown}  size="xl" className="arrow" ></FontAwesomeIcon>
                    </TitleCard>
                    <InfoContainer open={items[2].isOpen}>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>

                            <InfoTexts>B7 Web - Bonieky Lacerda </InfoTexts>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts>Início: 06/21</InfoTexts>
                                <InfoTexts>Término: 10/21</InfoTexts>
                            </InfoData>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts><a target="_blank" href="">Certificado</a></InfoTexts>
                            </InfoData>
                        </InfoCard>
                    </InfoContainer>

                </CursoCard>
                <CursoCard>
                    <TitleCard onClick={() => toggleDiv(4)}>
                        <h3>Curso Reactjs,React Native e Typescript</h3>
                        <FontAwesomeIcon icon={faChevronDown}  size="xl" className="arrow" ></FontAwesomeIcon>
                    </TitleCard>
                    <InfoContainer open={items[3].isOpen}>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>

                            <InfoTexts>RocketSeat</InfoTexts>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts>Início: 06/22</InfoTexts>
                                <InfoTexts>Término: 02/23</InfoTexts>
                            </InfoData>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts><a target="_blank" href="">Certificado</a></InfoTexts>
                            </InfoData>
                        </InfoCard>
                    </InfoContainer>

                </CursoCard>
                
                <CursoCard>
                    <TitleCard onClick={() => toggleDiv(5)}>
                        <h3>Curso de Java, POO e Spring Boot</h3>
                        <FontAwesomeIcon icon={faChevronDown}  size="xl" className="arrow" ></FontAwesomeIcon>
                    </TitleCard>
                    <InfoContainer open={items[4].isOpen}>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>

                            <InfoTexts>Udemy - Nelio Alves</InfoTexts>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts>Início: 03/23</InfoTexts>
                                <InfoTexts>Término: 06/23</InfoTexts>
                            </InfoData>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts><a target="_blank" 
                                href="https://www.udemy.com/certificate/UC-17bef985-0223-4202-bd39-4f86762073ec/">Certificado</a></InfoTexts>
                            </InfoData>
                        </InfoCard>
                    </InfoContainer>

                </CursoCard>

                <CursoCard>
                    <TitleCard onClick={() => toggleDiv(6)}>
                        <h3>Bootcamp Santander Java,Spring e Angular</h3>
                        <FontAwesomeIcon icon={faChevronDown}  size="xl" className="arrow" ></FontAwesomeIcon>
                    </TitleCard>
                    <InfoContainer open={items[5].isOpen}>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>

                            <InfoTexts>Udemy - Nelio Alves</InfoTexts>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts>Início: 03/23</InfoTexts>
                                <InfoTexts>Término: 06/23</InfoTexts>
                            </InfoData>
                        </InfoCard>
                        <InfoCard>
                            <FontAwesomeIcon icon={faMinus} size="xl" className="arrow" ></FontAwesomeIcon>
                            <InfoData>
                                <InfoTexts><a target="_blank" href="">Certificado</a></InfoTexts>
                            </InfoData>
                        </InfoCard>
                    </InfoContainer>

                </CursoCard>
           





            </CursoContainer>

        </SpecializationsContainer>
    )
}