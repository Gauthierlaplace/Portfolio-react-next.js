import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg
    dark:border-light dark:text-light
    sm:text-base'
    >
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &#169; GL Tous droits reservés</span>
            <div className='flex items-center lg:py-2'>
                <Link href="/">Codé avec <span className='text-primary dark:text-lime-500 text-xl px-1 font-bold'>&#9825;</span>, React, NextJS</Link>
            </div>
            <Link href="/">Contactez-moi !</Link>
        </Layout>
    </footer>
  )
}

export default Footer