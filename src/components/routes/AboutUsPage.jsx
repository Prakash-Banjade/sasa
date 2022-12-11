import React from 'react'
import HeroSectionAboutPage from '../about/HeroSection-AboutPage'
import AboutMainAboutPage from '../about/AboutMain-AboutPage'
import Founders from '../about/Founders'
import TagsAboutPage from '../about/Tags-AboutPage'
import Testimonials from '../about/Testimonials'

const AboutUsPage = () => {
  return (
    <>
    <div className='aboutPage'>
      <HeroSectionAboutPage />
    </div>
    <main>
      <AboutMainAboutPage />
    </main>
    <Founders />
    <TagsAboutPage />
    <Testimonials />
    </>
  )
}

export default AboutUsPage
