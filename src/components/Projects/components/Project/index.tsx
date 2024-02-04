import { ProjectCardContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import balls from "../../../../assets/shape-2.png"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'




interface project {
    project: projectProps
}

interface projectProps {
    id: number;
    name: String;
    about: string;
    img: string;
    tag: string;
    repository: string
    link: string

}

export function ProjectCard({ project }: project) {
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    const animationDelay = 0.2
    return (
        <motion.div
            ref={ref}
            initial='hidden'
            variants={imageVariants}
            animate={inView ? 'visible' : 'hidden'}
            custom={project.id}
            transition={{ delay: project.id * animationDelay }}
        >
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
                    <img src={balls} alt="" className="ballsD" />
                </div>


            </ProjectCardContainer>
        </motion.div>
    )
}