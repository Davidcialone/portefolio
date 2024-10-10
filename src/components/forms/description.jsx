import React from "react";
import BrandExample from "./brand"
import '../../style/homePage.css'

function Description() {
    return (
        <div className="description-container">
        <BrandExample/>

            <p className="description-text" style={{ marginTop: '2rem' }}>
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
         </div>
      
    )  
}

export default Description;