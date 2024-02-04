import { SkillContainer } from "./styles";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface DataProps {
    skill: toolsProps
}
interface toolsProps {
    id: number;
    name: string;
    img: string
}

export function Skill({ skill }: DataProps) {
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
            custom={skill.id}
            transition={{ delay: skill.id * animationDelay }}
        >

            <SkillContainer>
                <div style={{width:'2rem',height:'2rem',display:'flex',alignItems:'center'}}>
                    <img src={skill.img} alt="" className={skill.name} />
                </div>
                <p>{skill.name}</p>
            </SkillContainer>
        </motion.div>
    )
}
