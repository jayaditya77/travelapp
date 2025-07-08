import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

const About = () => {
  return (
    <>
    <Navbar /> 
    <Hero cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1622308644420-b20142dc993c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="About Us"
    btnclass="hide"
    />
    <Aboutus/>
    <Footer/>
    </>
  )
}

export default About