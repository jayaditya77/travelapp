import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
    <Navbar /> 
    <Hero cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1688918676396-1cb695307f87?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Contact Us"
    btnclass="hide"
    />
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact