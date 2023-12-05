import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Our Services" text="Oracle ADF (Oracle PaaS solutions), Recruitment , JAVA software solutions" text2="We also provide Oracle PaaS solutions to Oracle SCM, Oracle HCM, Oracle HRMS, Oracle Finance, Insurance sector, Semiconductor industry etc " > 
      </HeroImg2>
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
