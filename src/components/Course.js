import './CourseCard.css';
import React from 'react';
import CourseCardData from './CourseCardData';
import CourseCard from './CourseCard';
import img1 from '../assets/Cirteficate-suvarnboot.png';


const Course = () => {
  return (
    <>
    <h1 className='course-heading'> TECHINAUT INSTITUTE OF TECHNOLOGY </h1>
    <div className='courses-container'>
    <div className='course-container'>
        
        {CourseCardData.map((val, ind) =>{
          return(
            <CourseCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text1={val.text1}
            text2={val.text2}
            text3={val.text3}
            view={val.view}
             />
          )
        })}
    </div>
    </div>
    <p style={{textAlign:'center', marginBottom:'30px'}}>Placement services from Techinaut Institute of technology (More than 20000 students placed)</p>

    <div className='img-cirteficate'>
    <img src={img1} alt='img' />
    </div>
    <div className='course-btn'>
    <a href="https://www.techinaut.edu.in/all-members/suvarnboot-technology-services/" target="_blank" rel="noopener noreferrer" className='btn' >Visit Our Website</a>
    </div>
    </>
  )
}

export default Course