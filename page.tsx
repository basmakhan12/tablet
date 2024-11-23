import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Further from './components/Further'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Further/>
      <Blog/>
      <Testimonials/>
      <Footer/>

      
    </div>
  )
}

export default page
