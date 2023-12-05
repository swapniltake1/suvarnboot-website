import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';


export const Contact = () => {


  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact Us" text="Explore Advanced Solutions Tailored for You. From Oracle ADF and PaaS expertise to top-notch recruitment and Java software solutions. We're here to enhance your Oracle SCM, HCM, HRMS, Finance, Insurance, and Semiconductor industries with innovative technology." />
      <Form />
     <Footer />
    </div>
  )
};

export default Contact;
