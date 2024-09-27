import React from 'react';
import Banner from '../components/Banner';
import Features from '../components/FeatureItem';
import '../components/style/Banner.css';
import '../components/style/FeatureItem.css';

function Home() {
    return (
        <main>
            <Banner />
            <Features />
        </main>
    );
}

export default Home;