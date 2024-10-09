import React from 'react';

function Presentation() {
  return (
    <div>
      
      <p style={{ marginTop: '2rem' }}>
      Fort d'une solide expérience en management et en gestion de la relation client, 
      j'ai su développer une approche axée sur l'efficacité et la performance.
      <div style={{ margin: '1rem 0' }}></div> {/* Espace supplémentaire */}
      En complément de mes compétences managériales, j'ai acquis des connaissances en développement, 
      me permettant de concevoir des solutions adaptées aux défis techniques que vous pourriez rencontrer
      <div style={{ margin: '1rem 0' }}></div> {/* Espace supplémentaire */}
      Organisé, rigoureux et à l'écoute, je mets mes compétences en management et en développement au service 
      de vos objectifs stratégiques, apportant ainsi une réelle plus-value à vos projets.
      <div style={{ margin: '1rem 0' }}></div> {/* Espace supplémentaire */}
      Basé à Lyon et ses environs, je suis prêt à relever vos défis et à contribuer au succès de votre entreprise.
      </p>

      <h3 style={{ margin: '2rem' }}>Mes Compétences</h3>
      <div className="skills" style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '1rem', width: '32%', height: 'auto', overflow: 'hidden' }}>
          <img 
            src="images\management.png" 
            alt="Management" 
            style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} 
          />
        <p style={{ marginTop: '2rem' }}>
          <div style={{ margin: '1rem 0' }}>Gestion d'équipe et leadership</div>
          <div style={{ margin: '1rem 0' }}>Favorise la collaboration et la communication</div>
          <div style={{ margin: '1rem 0' }}>Inspire et motive les membres de l’équipe</div>
     
          <div style={{ margin: '1rem 0' }}>Oriente les choix pour atteindre les objectifs</div>
          <div style={{ margin: '1rem 0' }}>Accompagnent des collaborateurs</div>
        </p>
        </div>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '32%', height: 'auto', overflow: 'hidden' }}>
          <img 
            src="images\client.png" 
            alt="Client" 
            style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} 
          />
          <p style={{ marginTop: '2rem' }}>
          <div style={{ margin: '1rem 0' }}>Communication claire et adaptée</div>
          <div style={{ margin: '1rem 0' }}>Écoute active et attentive</div>
          <div style={{ margin: '1rem 0' }}>Gestion efficace des conflits</div>
          <div style={{ margin: '1rem 0' }}>Focalisé sur la satisfaction</div>
          <div style={{ margin: '1rem 0' }}>Suivi personnalisé après-vente</div>
          </p>
        </div>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '32%', height: 'auto', overflow: 'hidden' }}>
          <img 
            src="images\dev.png" 
            alt="Développement" 
            style={{ width: '15rem', height: '15rem', objectFit: 'cover' }}  
          />
          <p style={{ marginTop: '2rem' }}>
          <div style={{ margin: '1rem 0' }}>Développement d'applications web</div>
          <div style={{ margin: '1rem 0' }}>Adaptation aux besoins clients</div>
          <div style={{ margin: '1rem 0' }}>Technologies modernes et adaptées</div>
          <div style={{ margin: '1rem 0' }}>Collaboration avec les équipes agiles</div>
          <div style={{ margin: '1rem 0' }}>Tests approfondis pour qualité assurée</div>
          </p>
        </div>
      </div>
      <h3 style={{ marginTop: '2rem' }}>Contact</h3>
      <p style={{ marginTop: '2rem' }}>
        N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. 
        Vous pouvez me trouver sur <a href="https://www.linkedin.com/in/david-cialone-6a5a627b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ou me joindre par <a href="mailto:cialonedavid@gmail.com">email</a>.
      </p>
    </div>
  );
}

export default Presentation;