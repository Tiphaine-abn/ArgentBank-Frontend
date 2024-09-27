import React from 'react';
import chatIcon from '../assets/img/icon-chat.webp';
import moneyIcon from '../assets/img/icon-money.webp';
import securityIcon from '../assets/img/icon-security.webp';

// Données prédéfinies des features
const featuresData = [
    {
        icon: chatIcon,
        title: "You are our #1 priority",
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        icon: moneyIcon,
        title: "More savings means higher rates",
        description: "The more you save with us, the higher your interest rate will be!"
    },
    {
        icon: securityIcon,
        title: "Security you can trust",
        description: "We use top of the line encryption to make sure your data and money is always safe."
    }
];

// Reception des données
const FeatureItem = (props) => {
    return (
        <div className="feature-item">
            <img src={props.icon} alt={props.title + " Icon"} className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

// Affichage des éléments
function Features() {
    return (
        <main>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {featuresData.map((feature, index) => (
                    <FeatureItem
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </section>
        </main>
    );
}

export default Features;
