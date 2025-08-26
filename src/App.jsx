import React from 'react'
import AboutMe from './components/AboutMe'
import WhatICanDo from './components/WhatICanDo'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

import SkillSection from './components/SkillSection'

import Education from './components/Education'
import Projects from './components/projects'

const App = () => {
  return (
    <div>
     
      <Navbar/>
      <main className='' >
        <HeroSection/>
      
  

       
    
      
        <WhatICanDo/>
        
        <AboutMe/>
      </main>
      <Education/>
        <SkillSection/>
        <Projects/>
      <ContactForm/>
        
      <Footer/>
    </div>
  )
}

export default App