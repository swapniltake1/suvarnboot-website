
import './AboutContentStyle.css';
import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import React from 'react';
import GMap from '../components/GMap';

const AboutContent = () => {
  return (
    <div className='about'>

   <div className='left'>
   <h1> Achivements</h1>
<br />
   <div className="image-gallery">
      <img src={img1} alt='cirteficate'  />
      <img src={img2} alt='cirteficate' />
      <img src={img4} alt='cirteficate' />
      <img src={img5} alt='cirteficate' />
      <img src={img6} alt='cirteficate'  />
    </div>
    <br />
     <h1> Our Vision</h1>
     <p> We aim to help our customers achieve their specific key targets and business management goals.
       Our motto of “Service Beyond Expectations” leads us to give dedication and commitment to our customers in providing superior product solutions. </p>
     <br />
     <h1> Our Mission </h1>
     <p>Our mission is to be the catalyst between our customers and their customers; between existing legacy systems and new technologies; 
      between older distribution channels and new generation platforms.
       We enable our customers to leverage opportunities provided by new software technologies and business models</p>
       <br />
     <h1> How we deliver Excellence </h1>
     <p>Dedication to Integrity
Ownership of Responsibility
Accomplish goals
Leverage Experience
Respect Relationships
Maintain Clarity and Awareness
Deliver Value and Profitability
Simplified Sophistication
Unwavering Quality
Mutual Trust
</p>
<br />

<h1> About Suvarnboot Technology Services</h1>
<p> End to End IT services provider that provides Oracle PaaS, JAVA ,Website development, Staffing solutions to its customers.

Our company helps various customers bringing digital transformation to their conventional IT Solutions to produce better business outcomes.

Oracle PaaS solution company Staffing solution company Best Oracle ERP software development company in India JAVA Development services company in India IT staffing company in India</p>
   <br />

   </div>

     <GMap />

    </div>
  )
}

export default AboutContent