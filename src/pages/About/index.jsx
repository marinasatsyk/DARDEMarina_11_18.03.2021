import React from 'react';
import Dropdown from '../../components/Dropdown';
import RatingScale from '../../utils/ratingScale';

function About() {
    const about = {
        fiabilite: {
            label: 'Fiabilité',
            content:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        respect: {
            label: 'Respect',
            content:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        service: {
            label: 'Service',
            content: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`,
        },
        securite: {
            label: 'Sécurité',
            content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`,
        },
    };

    return (
        <div>
            <div>A propos</div>
            <Dropdown
                classname="myclass about"
                label={about.fiabilite.label}
                content={about.fiabilite.content}
            />
            <Dropdown
                label={about.respect.label}
                content={about.respect.content}
            />
            <Dropdown
                label={about.service.label}
                content={about.service.content}
            />
            <Dropdown
                label={about.securite.label}
                content={about.securite.content}
            />
        </div>
    );
}

export default About;
