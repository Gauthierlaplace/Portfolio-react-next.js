import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import homePic from "../../public/images/projects/rahkart_symbols_from_the_web_computer_science_digital_art_profi_15f47dcc-5899-47fd-a3f7-a5b8356edc26.png"
import darkHomePic from "../../public/images/projects/testblack.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import { useEffect, useState } from 'react'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {

  return (
    <>
      <Head>
        <title>Gauthier Laplace | Developpeur full stack</title>
        <meta name="description" content="Mon portfolio de développeur web full-stack, Gauthier Laplace" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={darkHomePic} alt="Gauthier Laplace - Web developper dark" className='w-full h-auto hidden dark:block lg:hidden'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              ></Image>
              <Image src={homePic} alt="Gauthier Laplace - Web developper light" className='w-full h-auto block dark:hidden'></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              {/* <AnimatedText text="" className='!text-4xl text-left'></AnimatedText> */}
              <AnimatedText text="Gauthier Laplace - Développeur Web Full-Stack"
              className='!text-6xl !text-left drop-shadow-xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'>
              </AnimatedText>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              En tant que développeur passionné, je mets un point d'honneur à créer des interfaces accessibles,
               à créer des fonctionnalités sur-mesure. Laissez moi transformez vos idées simples ou complexes en application web attractives et robustes.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/cv.pdf" target="_blank"
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border border-solid border-transparent hover:border-black

                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                '
                download={true}
                >Mon CV <LinkArrow className='w-4 ml-1' /></Link>
                <Link href="mailto:gauthier.laplace@gmail.com?subject=Prise de contact via le Portfolio" target="_blank"
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Me contacter</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
