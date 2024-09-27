import React from 'react';
import { Link } from 'react-router-dom'

function Error() {
    return (
        <main>
            <div>
                <h1>Oups ! Cette page n'existe pas</h1>
                <Link to='/'>Retour à la page d'accueil</Link>
            </div>
        </main>
    )
}

export default Error;