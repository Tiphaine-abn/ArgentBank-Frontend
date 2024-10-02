import React, { useState } from 'react';
import './style/SignInForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, getUserProfile } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);
    const navigate = useNavigate(); // Rediriger après connexion
    const error = useSelector((state) => state.user.error);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Gestionnaire d'événement du formulaire d'authentification
    const handleLogin = (event) => {
        event.preventDefault();

        // Appel de l'action `userLogin` pour authentifier l'utilisateur
        dispatch(userLogin({ email, password }))
            .unwrap() // Permet d'attendre la résolution de la promesse
            .then(() => {
                // Une fois connecté, récupère les informations du profil
                dispatch(getUserProfile()) // Appel de l'action pour obtenir le profil
                    .unwrap()
                    .then(() => {
                        // Redirige vers la page du profil après avoir récupéré les infos de connexion
                        navigate('/UserProfile');
                    })
                    .catch((error) => {
                        console.error('Failed to fetch user profile:', error);
                    });
            })
            .catch((error) => {
                console.error('Login failed:', error);
            });
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleLogin}> {/* Ajoute la soumission du formulaire ici */}
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Met à jour l'état de l'email
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Met à jour l'état du mot de passe
                            required
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" type="submit" disabled={loading}>
                        {loading ? 'Loading...' : 'Sign In'} {/* Change le texte du bouton pendant le chargement */}
                    </button>
                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Affiche l'erreur si elle existe */}
                </form>
            </section>
        </main>
    );
}

export default SignInForm;