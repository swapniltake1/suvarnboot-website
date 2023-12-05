import React from 'react';
import './Awards.css'; 
import img1 from '../assets/11.webp';
import img2 from '../assets/22.webp';
import img3 from '../assets/33.webp';
import img4 from '../assets/44.webp';
import img5 from '../assets/55.webp';
import img6 from '../assets/66.webp';
import img7 from '../assets/77.webp';

const Awards = () => {
  return (
    <div className="awards-container">
      <div className="award-images">
        <img src={img1} alt="Award 1" />
        <img src={img2} alt="Award 2" />
        <img src={img3} alt="Award 3" />
        <img src={img4} alt="Award 4" />
        <img src={img5} alt="Award 5" />
        <img src={img6} alt="Award 6" />
        <img src={img7} alt="Award 7" />
      </div>
    </div>
  );
};

export default Awards;
