
import { ProjectCard } from "./components/Project";
import { ProjectContainer } from "./styles";
import { projects } from '../../assets/Data'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Project() {
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    const animationDelay = 0.4
    return (
        <ProjectContainer id="Projetos" >
            <h2>Projetos</h2>

            <motion.div
                ref={ref}
                initial='hidden'
                variants={imageVariants}
                animate={inView ? 'visible' : 'hidden'}
                
                transition={{ delay: animationDelay }}
            >
                <div className="Cards">

                    {projects.map((project) => (
                        <div className="container" key={project.id}>
                            <ProjectCard project={project} />
                        </div>
                    ))}




                </div>
            </motion.div>
        </ProjectContainer>
    )
}