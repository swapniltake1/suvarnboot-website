import './HeroImgStyle.css';
import '../index.css';
import React from 'react';
import intro from '../assets/background-img.jpg';
import { Link } from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className='hero'>

    <div className='mask'>
        <img className='into-img' src={intro} alt='intro img' />
    </div>

    <div className='content'>
    <p>We Offer- We have highly skilled Employees for Software Development/Support Services for our clients, Outsourcing, Consulting, Staffing, Recruitment and Technical Courses </p>
        <h1> </h1>
        

    
    <Link to='/contact' className='btn btn-light'> Get In Touch </Link>

    </div>

    </div>
  )
}

export default HeroImg