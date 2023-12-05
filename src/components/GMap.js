import React from 'react';

const GMap = () => {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '30px' }}> We Are Located here </h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
       
        <div style={{ flex: '1 1 40%', margin: '20px', textAlign: 'center', color: 'white' }}>
          <h2>Our Office Address:</h2>
          <br />
          <p>Near Paavan Ganapati mandir </p>
          <p>Ahmednagar, Dist - Ahmednagar</p>
          <p>Maharashtra, India 414603 </p>
          <br />
          <p>Contact Number: 8830031294</p>
          <p>Email Id: hr@suvarnasoftc1.co.in</p>
        </div>

      
        <div style={{ flex: '1 1 40%', margin: '10px', textAlign: 'center' }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.739148670358!2d74.74336317466518!3d19.0752031519986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x429b35f3fba792ed%3A0xfb0c7efa03594876!2ssuvarnboot%20technology%20services!5e0!3m2!1sen!2sin!4v1701684921153!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GMap;
