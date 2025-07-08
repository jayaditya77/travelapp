import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

const Service = () => {
  return (
    <>
      <Navbar /> 
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1716469963703-b8b13b5a5804?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Services"
        text="We offer a range of services to cater to your travel needs."
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
