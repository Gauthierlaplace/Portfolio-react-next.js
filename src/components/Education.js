import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light'>{type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full dark:text-light md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}
const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16'>
                Formations
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
                md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                        <Details

                        type="Titre professionel Développeur Web et Web Mobile"
                        time="2023" place="O'clock en télé-présentiel"
                        info="Gestion du parc informatique et du réseau de l'établissement, 
                        formateur en Gestion de l'Information Touristique pour des classes de BTS en alternance 
                        (PAO, Webdesign, CMS, bureautique avancée, bases de données)"
                        />

                        <Details

                        type="Formation Webdesigner"
                        time="2006" place="Forma'Concept - Dunkerque"
                        info="Gestion du parc informatique et du réseau de l'établissement, 
                        formateur en Gestion de l'Information Touristique pour des classes de BTS en alternance 
                        (PAO, Webdesign, CMS, bureautique avancée, bases de données)"
                        />

                        <Details

                        type="DEUG - Langues Etrangères Appliquées"
                        time="2002-2004" place="ULCO - Dunkerque"
                        info="Gestion du parc informatique et du réseau de l'établissement, 
                        formateur en Gestion de l'Information Touristique pour des classes de BTS en alternance 
                        (PAO, Webdesign, CMS, bureautique avancée, bases de données)"
                        />

                        <Details

                        type="Baccalauréat technologique"
                        time="2000-2002" place="Lycée B. de Laffemas - Valence"
                        info="Gestion du parc informatique et du réseau de l'établissement, 
                        formateur en Gestion de l'Information Touristique pour des classes de BTS en alternance 
                        (PAO, Webdesign, CMS, bureautique avancée, bases de données)"
                        />

                    </ul>
            </div>
            
        </div>
    )
}

export default Education