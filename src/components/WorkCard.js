import './WorkCardStyle.css';

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='img' />
    <h2 className='project-title'> {props.title}</h2>
    <div className='pro-details'>
        <p> {props.text1} </p>
    </div>
</div>
  )
}

export default WorkCard