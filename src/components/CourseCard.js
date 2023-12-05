import './CourseCard.css';
import React from 'react';

const CourseCard = (props) => {
  return (
    <div className='course-card'>
      <img src={props.imgsrc} alt='img' />
      <h2 className='course-title'>{props.title}</h2>
      <div className='course-details'>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <div className='course-btn'>
          <a href={props.view} target="_blank" rel="noopener noreferrer" className='btn' >Download Syllabus</a>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;
