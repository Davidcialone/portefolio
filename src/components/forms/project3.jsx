// src/components/forms/Project3.js
import React from 'react';

function Project3() {
  return (
    <div>
      <h2>Projet 3</h2>
      
      <img 
        src="https://agrilab.unilasalle.fr/projets/attachments/download/1875/projet.jpg" 
        alt="Projet 3" 
        style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }} 
      />
      
      <h3>Système de Gestion de Réservation en Ligne pour un Centre de Conférences</h3>

      <p>
        Ce projet consistait à développer un système de gestion de réservation en ligne pour un centre de conférences afin de simplifier la gestion des réservations et améliorer l'expérience des clients.<br />
        Le système permet aux utilisateurs de consulter les disponibilités en temps réel, de réserver des salles et de gérer leurs réservations via une interface web conviviale.
      </p>

      <h4>Fonctionnalités Principales :</h4>
      <p>
        <strong>Consultation en Temps Réel :</strong> Permet aux utilisateurs de vérifier les disponibilités des salles en temps réel.<br />
        <strong>Réservation en Ligne :</strong> Offre une interface web conviviale pour réserver des salles et gérer les réservations.<br />
        <strong>Calendriers Interactifs :</strong> Intègre des calendriers interactifs pour une gestion facile des disponibilités.<br />
        <strong>Options de Paiement Sécurisées :</strong> Inclut des options de paiement sécurisées pour les transactions en ligne.<br />
        <strong>Services Supplémentaires :</strong> Permet l'ajout de services supplémentaires, tels que des équipements audiovisuels ou des repas.
      </p>

      <h4>Gestion Administrative :</h4>
      <p>
        <strong>Interface Backend :</strong> Permet aux administrateurs de gérer les réservations, suivre l'utilisation des salles et générer des rapports détaillés.<br />
        <strong>Notifications :</strong> Intègre des notifications par email et SMS pour envoyer des confirmations instantanées et des rappels de réservation aux clients.
      </p>

      <h4>Résultats Obtenus :</h4>
      <p>
        <strong>Réduction du Temps de Gestion :</strong> Le système a permis de réduire le temps de gestion des réservations de 50%.<br />
        <strong>Amélioration de la Satisfaction Client :</strong> Offre une interface plus accessible et transparente, augmentant ainsi la satisfaction des clients.
      </p>
    </div>
  );
}

export default Project3;
