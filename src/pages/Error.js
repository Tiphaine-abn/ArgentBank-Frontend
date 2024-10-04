import React from 'react';
import { Link } from 'react-router-dom'
import '../pages/style/Error.css';

const Error = () => {
    return (
        <div className="page-404">
            <h1>Erreur 404 - Page non trouvée</h1>
            <Link to="/" className="home-link">
                Retour à la page d'accueil
            </Link>
        </div>
    );
};

export default Error;