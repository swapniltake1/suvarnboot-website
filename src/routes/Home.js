import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Awards from '../components/Awards';
import AboutContent from '../components/AboutContent';
import HomeContent from '../components/HomeContent';


export const home = () => {
  return (
    <div>

     <Navbar/>   
     
     <HeroImg />

     <HomeContent />

     

     <Awards />

     <Footer />

    </div>
  )
};
export default home;
