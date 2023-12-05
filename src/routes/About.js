import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About Us" text="SUVARNBOOT TECHNOLOGY SERVICES is best - ISO/IEC 20000 -1:2018, ISO 9001:2015 certified startup IT company in Ahmednagar" />
      <AboutContent />
     <Footer />
    </div>
  )
};

export default About;
