import AboutMe from '@/components/About'
import Companies from '@/components/Compnies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Nav'
import Portfolio from '@/components/Projects'
import Services from '@/components/Services'
import React from 'react'

function Index() {
    return (
        <>


            <Hero />
            <Companies />
            <AboutMe />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />

        </>
    )
}

export default Index