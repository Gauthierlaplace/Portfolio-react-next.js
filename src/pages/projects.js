import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import { Linden_Hill } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import projectImg1 from '../../public/images/projects/Onceuponanapp.png'
import {motion} from 'framer-motion';

const FramerImage = motion(Image);

const HighLightProject = ({type, title, summary, img, link, github}) => {
    return(
        <article className='relative w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-white 
        dark:border-light dark:bg-dark shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[100.8%] h-[102.4%] rounded-[2.5rem] bg-lime-600 dark:bg-light rounded-br-3xl
            xs:-right-2 sm:h-[101.8%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                initial={{filter:"blur(1.5px)"}}
                whileHover={{scale:1.05, filter:"blur(0px)"}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-lime-500 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 dark:text-light'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-white dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
                    sm:px-4 sm:text-base
                    '>Visiter le projet</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
        bg-white dark:border-light dark:bg-dark p-6 relative shadow-xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101.3%] h-[102.4%] rounded-[2rem] bg-lime-600 dark:bg-light rounded-br-3xl
            md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 dark:text-light'>
                <span className='text-lime-500 font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold sm:text-sm lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Voir</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Gauthier Laplace | Projets</title>
            <meta name="description" content="Voici quelques projets que j'ai eu l'occasion de réaliser, pour chacun, vous trouverez la liste de technos utilisées" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text="Des projets plein la tête..." className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12 border-'>
                    <HighLightProject 
                    title="Once Upon An App"
                    img={projectImg1}
                    summary="Un projet de fin de formation. Le contenu a été créé avec Chat GPT pour les textes et Midjourney pour les illustrations."
                    link="https://www.onceuponanapp.fr"
                    type="Le site dont vous êtes le héros [React/Symfony]"
                    github="https://github.com/Gauthierlaplace/Once-upon-an-app-front"
                    />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title="Projet d'exemple qui occupe la moitié de la largeur"
                        img={projectImg1}
                        summary="Voici quelques projets que j'ai eu l'occasion de réaliser, pour chacun, vous trouverez la liste de technos utilisées"
                        link="/"
                        type="Le type du projet d'exemple"
                        github="lien vers le repo github"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title="Projet d'exemple qui occupe la moitié de la largeur"
                        img={projectImg1}
                        summary="Voici quelques projets que j'ai eu l'occasion de réaliser, pour chacun, vous trouverez la liste de technos utilisées"
                        link="/"
                        type="Le type du projet d'exemple"
                        github="lien vers le repo github"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects