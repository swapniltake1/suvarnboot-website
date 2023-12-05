import './SkillsStyles.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Skills = () => {
  return (
    <>
    <h1 style={{textAlign:'center', marginTop:'30px'}}> Our Services </h1>
      <br />
    <div className='skills'>

      <div className='card-container'>
    
        <div className='card'>
          <p className='btc'> Enterprise Java  </p>
          <span className='bar'> </span>
          <p> Core Java </p>
          <p>Advanced Java</p>
          <p>J2EE/Jsp-Servlet/Thymeleaf</p>
          <p>JDBC/Hibernate/JPA</p>
          <p>Spring & Spring Boot</p>
        </div>

        <div className='card'>
          <p className='btc'> Oracle Cloud </p>
          <span className='bar'> </span>
          <p> Oracle Retail </p>
          <p>Oracle Manufacturing</p>
          <p>Banking industry </p>
          <p>Healthcare</p>
          <p>Telecom sector </p>
        </div>

        <div className='card'>
          <p className='btc'> Recruitment Process </p>
          <span className='bar'> </span>
          <p>Delivered on-site or off-site, or through a combination</p>
      <p>Team of recruiters as an extension of the client’s talent acquisition team</p>
      <p>Country-aligned, multi-regional, or global remits</p>
        </div>

      </div>
      <div className="button-container">
          <Link to="/contact" className='btn'> Contact Us </Link>
        </div>
    </div>
    </>
  );
}

export default Skills;
