import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/projects/gauthierlaplace.jpg'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const About = () => {
  return (
    <div>
      <Head>
        <title>Gauthier Laplace | A propos</title>
        <meta name="description" content="Pour en savoir plus sur mes compétences techniques (front-end et back-end) et mon parcours" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="un éclectique passionné" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biographie</h2>
              <p className='font-medium dark:text-light'>
              Salut, je m'appelle Gauthier, je suis développeur web passionné par la création d'expériences numériques belles, fonctionnelles et centrées sur l'utilisateur. Je suis perpétuellement à la recherche de moyens originaux et innovants pour donner vie aux visions de mes clients.
              </p>
              <p className='my-4 font-medium dark:text-light'>
              Selon moi, une application doit être jolie - évidemment - mais surtout construite de façon à ce que l'utilisateur se l'approprie immédiatement, indépendamment de son niveau de compétence en matière de technologies web. 
              </p>
              <p className='font-medium dark:text-light'>
              Mon engagement envers des solutions interactives et conviviales guide chacun de mes projets. Si vous recherchez un développeur web passionné et déterminé à créer des expériences numériques mémorables, je suis prêt à contribuer à la réussite de votre prochain projet.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark/75' />
              <Image src={profilePic} alt="Gauthier Laplace" className='w-full h-auto rounded 2xl'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" />
            </div>
          </div>
        <Experience />
        <Education />
        </Layout>
      </main>
    </div>
  )
}

export default About