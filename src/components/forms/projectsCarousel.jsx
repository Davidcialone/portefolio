// src/components/forms/ProjectsCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import des styles du carousel

const ProjectsCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
      <div>
        <img src='https://www.agera.asso.fr/app/uploads/2020/08/Projet.jpg' alt="Projet 1" />
        <div className="legend">
          <h3>Refonte du Site Web de l'Entreprise XYZ</h3>
          <p>
            Nous avons entrepris une refonte complète du site web de l'entreprise XYZ pour moderniser son apparence et améliorer l'expérience utilisateur. Le projet a impliqué une analyse approfondie des besoins des utilisateurs et une révision du design pour le rendre plus intuitif et attrayant. Nous avons mis en œuvre une interface réactive adaptée aux appareils mobiles, avec une navigation simplifiée et des temps de chargement optimisés. Les nouvelles fonctionnalités incluent un système de gestion de contenu amélioré, permettant à l'équipe de XYZ de mettre à jour le site facilement. En intégrant des outils d'analyse avancés, nous avons permis un suivi détaillé du comportement des visiteurs. Cette refonte a non seulement augmenté le taux de conversion mais a également renforcé la présence en ligne de XYZ, augmentant ainsi sa visibilité et son engagement client.
          </p>
        </div>
      </div>
      <div>
        <img src='https://cdn.edi-static.fr/image/upload/c_scale,f_auto,h_564,q_auto/v1/Img/FICHEPRATIQUE/2020/11/354322/Assurer-pilotage-projet-assurer-son-succes-LE.jpg'alt="Projet 2" />
        <div className="legend">
          <h3>Développement d'une Application Mobile de Suivi des Habitudes</h3>
          <p>
            Ce projet consistait à créer une application mobile destinée à aider les utilisateurs à suivre et améliorer leurs habitudes personnelles, avec un focus particulier sur le bien-être.<br />
            <strong>Objectifs de l'Application :</strong><br />
            <strong>Suivi des Habitudes :</strong> Permettre aux utilisateurs de suivre leurs routines quotidiennes et d’atteindre leurs objectifs personnels.<br />
            <strong>Définition d'Objectifs :</strong> Offrir la possibilité de définir des objectifs personnalisés et de recevoir des rappels pour maintenir la motivation.<br />
            <strong>Visualisation des Progrès :</strong> Utiliser des graphiques interactifs pour afficher les progrès réalisés et fournir des statistiques détaillées.<br />
            <strong>Partage et Défis :</strong> Inclure une fonctionnalité de partage permettant aux utilisateurs de se connecter avec des amis pour participer à des défis de groupe.
          </p>
        </div>
      </div>
      <div>
        <img src='https://agrilab.unilasalle.fr/projets/attachments/download/1875/projet.jpg' alt="Projet 3" />
        <div className="legend">
          <h3>Système de Gestion de Réservation en Ligne pour un Centre de Conférences</h3>
          <p>
            Ce projet consistait à développer un système de gestion de réservation en ligne pour un centre de conférences afin de simplifier la gestion des réservations et améliorer l'expérience des clients.<br />
            <strong>Fonctionnalités Principales :</strong><br />
            <strong>Consultation en Temps Réel :</strong> Permet aux utilisateurs de vérifier les disponibilités des salles en temps réel.<br />
            <strong>Réservation en Ligne :</strong> Offre une interface web conviviale pour réserver des salles et gérer les réservations.<br />
            <strong>Calendriers Interactifs :</strong> Intègre des calendriers interactifs pour une gestion facile des disponibilités.<br />
            <strong>Options de Paiement Sécurisées :</strong> Inclut des options de paiement sécurisées pour les transactions en ligne.<br />
            <strong>Services Supplémentaires :</strong> Permet l'ajout de services supplémentaires, tels que des équipements audiovisuels ou des repas.<br /><br />
            <strong>Gestion Administrative :</strong><br />
            <strong>Interface Backend :</strong> Permet aux administrateurs de gérer les réservations, suivre l'utilisation des salles et générer des rapports détaillés.<br />
            <strong>Notifications :</strong> Intègre des notifications par email et SMS pour envoyer des confirmations instantanées et des rappels de réservation aux clients.<br /><br />
            <strong>Résultats Obtenus :</strong><br />
            <strong>Réduction du Temps de Gestion :</strong> Le système a permis de réduire le temps de gestion des réservations de 50%.<br />
            <strong>Amélioration de la Satisfaction Client :</strong> Offre une interface plus accessible et transparente, augmentant ainsi la satisfaction des clients.
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default ProjectsCarousel;
