import React from 'react';
import './HomeContent.css';
import Skills from './Skills';
import culter from '../assets/culter.png'

const HomeContent = () => {
  return (
    <>
    <div className='hm-container'>
        <div >
            <h1 className='heading'> Innovative IT Services & Solutions Aimed At Global Digital Transformation </h1>
            <p> suvarnboot technology services simplifies your move to technology with a comprehensive range of digital solutions that enhance your business outcomes.
                 With over 100 years of combined experience, we deliver exceptional services to global clients across various industries, 
                 including Oracle ADF (Oracle PaaS solutions), Recruitment , JAVA software solutions, supply chain and distribution, fintech, retail, and more, using a proven onshore/offshore delivery model.</p>
        </div>
        </div>

        <Skills />

        <div className='hm-container2'>
            <div>
            <h1 className='heading'> The Pioneers In Full Stack IT Services & Solutions. Enabling Business Innovation And Agility. </h1>
            <p style={{textAlign:'center'}}> In the era of lightning-fast technological advancements, every business needs a one-stop destination to cater to its IT needs. That’s what we do at suvarnboot tech services. We believe in finding state-of-the-art solutions for your challenges, whatever technology it takes!</p>
            <p style={{textAlign:'center', padding:'20px'}} >We are a leading IT services & solutions provider, enabling & empowering global businesses build and maintain a distinctive value proposition by implementing best-in-class and innovative technological solutions.</p>
            </div>

            </div>

            <div class="main-container">
            <div class="image-container">

           <img src={culter} alt="Blurred" />
           <div class="text-overlay">
            <h2>Culture</h2>
            <p>“Diversity is the mix. Inclusion is making the mix work. And, equity is the only acceptable goal.”</p>
           <p>At Suvarnboot technology services, we believe that our differences make us stronger. We value diversity, equity, and inclusion and strive to create an environment where all employees feel valued and respected.</p>
            </div>
</div>

</div>


        
    
    </>
  )
}

export default HomeContent