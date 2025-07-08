import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <Navbar /> 
    <Hero 
    cName="hero"
    heroImg="https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Your journey to Bengal"
    text="Experience the magic of travel, uncover hidden gems."
    buttonText="Book Your Trip"
    url="/"
    btnclass="show"
    />
    <Destination/>
    <Trip/>
    <Footer/>
    </>
  )
}

export default Home