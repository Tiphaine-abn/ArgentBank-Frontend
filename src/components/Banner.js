import React from 'react';
import { bannerData } from '../data/data';
import './style/Banner.css';

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
