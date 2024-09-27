import React from 'react';
import './style/Banner.css';
import backgroundImage from '../assets/img/bank-tree.webp';

// Données de la bannière
const bannerData = {
    title: "Promoted Content",
    subtitles: ["No fees.", "No minimum deposit.", "High interest rates."],
    text: "Open a savings account with Argent Bank today!",
    backgroundImage: backgroundImage,
};

const Banner = () => {
    const { title, subtitles, text, backgroundImage } = bannerData;

    return (
        <main>
            <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <section className="hero-content">
                    <h2 className="sr-only">{title}</h2>
                    {subtitles.map((subtitle, index) => (
                        <p key={index} className="subtitle">{subtitle}</p>
                    ))}
                    <p className="text">{text}</p>
                </section>
            </div>
        </main>
    );
};

export default Banner;
