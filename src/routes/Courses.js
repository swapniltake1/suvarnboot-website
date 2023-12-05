import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Course from '../components/Course';


const Courses = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Our Courses" text="Get Diploma/ PG-Diploma certificates from  An Autonomous Institution Regd. Under Society Act. 21, 1860" />
     <Course />
     <Footer />
    </div>
  )
}

export default Courses