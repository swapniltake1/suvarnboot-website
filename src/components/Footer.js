import './FooterStyle.css';
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';


import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/', '_blank');
  };

  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/', '_blank');
  };

  const handleWhatsappClick = () => {
    const message = encodeURIComponent("Hi, let's connect!"); 
    window.open(`https://wa.me//?text=${message}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/', '_blank');
  };

  return (
    <div className='footer'>
     <div className='footer-container'>
     <div className='right'>
        
        <div className='location'>
        <FaHome size={20} style={ { color:"#fff", marginRight:"2rem"}} />
        <div> 
         <p> Near Paavan Ganapati mandir </p>
        <p> Ahmednagar, Maharashtra</p>
        <p> India 414001</p>
        </div>
         </div>
        
        
        <div className='location'>
        <FaPhone size={20} style={ { color:"#fff", marginRight:"2rem"}} />
        <div>
        <p>+91 8830031294</p>
        </div>
        </div>
    
        <div className='location'>
        <FaMailBulk size={20} style={ { color:"#fff", marginRight:"2rem"}} />
        <div>
        <p>hr@suvarnasoftc1.co.in</p>
        </div>
        </div>
    
        </div>

    <div className='left'> 
    <h4>About Us</h4>
    <br />
     <p>  SUVARNBOOT TECHNOLOGY SERVICES is best - ISO/IEC 20000 -1:2018, ISO 9001:2015 certified startup IT company in Ahmednagar </p>
     <br/>
    <p>With our constant endeavor, we have been adroit in developing practices in serving enterprises with the best of our technical capabilities.</p>
       
    </div>
    </div>
    <div className='social'>
      <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleLinkedInClick} />
      <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleTwitterClick} />
      <FaYoutube size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleYoutubeClick} />
      <FaWhatsapp size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleWhatsappClick} />
      <FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem" }} onClick={handleInstagramClick} />
    </div>
    <footer className='social'>
      <p>© Copyright {currentYear} All Rights Reserved | SuvarnBoot Technology Services, Ahmednagar</p>
    </footer>
    </div>
    
  )
}

export default Footer