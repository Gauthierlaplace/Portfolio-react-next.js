import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, time, adress, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light'>{position}&nbsp;chez {company}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {adress}
            </span>
            <p className='font-medium w-full dark:text-light md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
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
                Expériences
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]'/>
                    <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                        
                        <Details

                        position="Auto-entrepreneur" company="moi :)"
                        time="2017-aujourd'hui" adress="secteur Marmande, Villeneuve-sur-lot, tonneins (47)"
                        work="Développement web, dépannage informatique à domicile pour les particuliers et les entreprises, création graphique."

                        />

                        <Details

                        position="Administrateur réseau et formateur" company="Maison Familiale Rurale"
                        time="2013-2017" adress="Miramont de Guyenne"
                        work="Gestion du parc informatique et du réseau de l'établissement, 
                        formateur en Gestion de l'Information Touristique pour des classes de BTS en alternance 
                        (PAO, Webdesign, CMS, bureautique avancée, bases de données)"
                        
                        />

                        <Details

                        position="Administrateur réseau et formateur" company="CEFRAL"
                        time="2008-2010" adress="Dunkerque"
                        work="Administration des serveurs (Windows Server), gestion des sauvegardes et des postes utilisateur. 
                        Formateur en Informatique pour des classes du CAP au BTS."

                        />

                        <Details

                        position="Administrateur réseau et animateur Multimédia" company="ADUGES"
                        time="2006-2008" adress="Dunkerque"
                        work="Administration de serveur (Linux), gestion des sauvegardes et des postes utilisateur. 
                        Animation et créations d'ateliers multimédia dans un cyber-centre."

                        />
                    </ul>
            </div>
            
        </div>
    )
}

export default Experience