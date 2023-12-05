import './WorkCardStyle.css';
import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';


const Work = () => {
  return (
    <div className='work-container'>
    <h1 className='project-heading'> Our Services </h1>
    <div className='project-container'>
        
        {WorkCardData.map((val, ind) =>{
          return(
            <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text1={val.text1}
            text2={val.text2}
            view={val.view}
            source={val.source} />
          )
        })}
    </div>
    </div>
  )
}

export default Work