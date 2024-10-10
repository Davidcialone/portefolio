import React from 'react';
import Description from './description';
import Skills from './skills'

function Presentation() {
  return (
    <div>
      <Description/>
      <Skills/>     
      <h3 style={{ marginTop: '2rem' }}>Contact</h3>
      <p style={{ marginTop: '2rem' }}>
        N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. 
        Vous pouvez me trouver sur <a href="https://www.linkedin.com/in/david-cialone-6a5a627b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ou me joindre par <a href="mailto:cialonedavid@gmail.com">email</a>.
      </p>
    </div>
  );
}

export default Presentation;