import React from 'react';
import { featuresData } from '../data/data';

const FeatureItem = (props) => {
    return (
        <div className="feature-item">
            <img src={props.icon} alt={props.title + " Icon"} className="feature-icon" />
            <h3 className="feature-item-title">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
};

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
