import React from 'react';

function Presentation() {
  return (
    <div>
      <h2>A propos de moi</h2>
      <img 
        src="data:image/jpeg;base64,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" 
        alt="Photo de David Cialone" 
        style={{ width: '30%', height: 'auto', marginBottom: '1rem' }} 
      />
      <p>
        Bonjour et bienvenue sur mon portfolio ! Je m'appelle David Cialone, un développeur passionné et créatif spécialisé dans la création de solutions numériques innovantes. Avec une expertise en développement web et une solide expérience dans la conception d'applications interactives, je m'engage à transformer des idées complexes en expériences utilisateur intuitives et élégantes.
      </p>

      <h3>Ce Que Je Fais</h3>
      <ul>
        <li><strong>Développement Front-End :</strong> Création d'interfaces utilisateur dynamiques et réactives avec React, HTML5, CSS3, et JavaScript.</li>
        <li><strong>Développement Back-End :</strong> Conception et gestion de bases de données, intégration d'APIs, et création de services web performants.</li>
        <li><strong>Conception UX/UI :</strong> Élaboration de designs modernes et ergonomiques qui répondent aux besoins des utilisateurs et améliorent l'expérience globale.</li>
        <li><strong>Optimisation et Performance :</strong> Mise en place de pratiques de développement visant à garantir la rapidité et l'efficacité des applications.</li>
      </ul>

      <h3>Mon Parcours</h3>
      <p>
        Après avoir complété mes études en développement informatique, j'ai eu l'opportunité de travailler sur divers projets allant de la création de sites web pour petites entreprises à la conception d'applications pour des clients internationaux. Mon expérience m'a permis de maîtriser les meilleures pratiques de l'industrie et d'adopter une approche agile pour résoudre les défis techniques.
      </p>

      <h3>Pourquoi Me Choisir</h3>
      <p>
        Je crois fermement que la collaboration et la communication sont les clés d'un projet réussi. Mon objectif est de travailler étroitement avec mes clients pour comprendre leurs besoins spécifiques et créer des solutions qui non seulement répondent à leurs attentes mais les surpassent. Avec une attention particulière aux détails et une passion pour la technologie, je m'engage à offrir des produits de haute qualité qui ajoutent une valeur réelle.
      </p>

      <h3>Contact</h3>
      <p>
        N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. Vous pouvez me trouver sur <a href="https://www.linkedin.com/in/david-cialone" target="_blank" rel="noopener noreferrer">LinkedIn</a> ou me joindre par <a href="mailto:your.email@example.com">email</a>.
      </p>

      <p>Merci de visiter mon portfolio, et j'espère avoir l'occasion de collaborer avec vous bientôt !</p>
    </div>
  );
}

export default Presentation;
