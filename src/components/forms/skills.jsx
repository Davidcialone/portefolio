import React from "react";

function Skills() {
  return (
    <div>
      <h3 style={{ margin: '2rem' }}>Mes Compétences</h3>
      <div className="skills" style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '1rem', width: '32%', height: 'auto', overflow: 'hidden' }}>
          <img 
            src="images/management.png" 
            alt="Management" 
            style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} 
          />
          <div style={{ marginTop: '2rem' }}>
            <div style={{ margin: '1rem 0' }}>Gestion d'équipe et leadership</div>
            <div style={{ margin: '1rem 0' }}>Favorise la collaboration et la communication</div>
            <div style={{ margin: '1rem 0' }}>Inspire et motive les membres de l’équipe</div>
            <div style={{ margin: '1rem 0' }}>Oriente les choix pour atteindre les objectifs</div>
            <div style={{ margin: '1rem 0' }}>Accompagnement des collaborateurs</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '32%', height: 'auto', overflow: 'hidden' }}>
          <img 
            src="images/client.png" 
            alt="Client" 
            style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} 
          />
          <div style={{ marginTop: '2rem' }}>
            <div style={{ margin: '1rem 0' }}>Communication claire et adaptée</div>
            <div style={{ margin: '1rem 0' }}>Écoute active et attentive</div>
            <div style={{ margin: '1rem 0' }}>Gestion efficace des conflits</div>
            <div style={{ margin: '1rem 0' }}>Focalisé sur la satisfaction</div>
            <div style={{ margin: '1rem 0' }}>Suivi personnalisé après-vente</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', width: '32%', height: 'auto', overflow: 'hidden' }}>
          <img 
            src="images/dev.png" 
            alt="Développement" 
            style={{ width: '15rem', height: '15rem', objectFit: 'cover' }}  
          />
          <div style={{ marginTop: '2rem' }}>
            <div style={{ margin: '1rem 0' }}>Développement d'applications web</div>
            <div style={{ margin: '1rem 0' }}>Adaptation aux besoins clients</div>
            <div style={{ margin: '1rem 0' }}>Technologies modernes et adaptées</div>
            <div style={{ margin: '1rem 0' }}>Collaboration avec les équipes agiles</div>
            <div style={{ margin: '1rem 0' }}>Tests approfondis pour qualité assurée</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
