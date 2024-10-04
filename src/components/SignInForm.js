import React, { useState, useEffect } from 'react';
import './style/SignInForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin, getUserProfile, logIn } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading); // État de chargement de la connexion
    const navigate = useNavigate();
    const error = useSelector((state) => state.user.error);
    const isConnected = useSelector((state) => state.user.isConnected); // Vérifie si l'utilisateur est connecté

    // États locaux pour le formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Vérifie si l'utilisateur est déjà connecté ou si un email est sauvegardé
    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (token) {
            dispatch(logIn({ token })); // Connecte l'utilisateur si un token existe
            navigate('/');
        }

        const savedEmail = localStorage.getItem('rememberedEmail');
        if (savedEmail) {
            setEmail(savedEmail); // Remplit le champ email
            setRememberMe(true); // Coche la case si l'email est sauvegardé
        }
    }, [dispatch]);

    // Gère l'événement de soumission du formulaire
    const handleLogin = (event) => {
        event.preventDefault();

        // Authentifie l'utilisateur et obtient le token
        dispatch(userLogin({ email, password }))
            .unwrap() // Attend la résolution de la promesse
            .then((token) => { // Si la connexion est réussie
                console.log('Token reçu:', token);
                if (rememberMe) {
                    localStorage.setItem('token', token); // Stocke le token dans localStorage
                    localStorage.setItem('rememberedEmail', email); // Sauvegarde l'email
                    console.log('Token sauvegardé dans localStorage:', localStorage.getItem('token'));
                } else {
                    sessionStorage.setItem('token', token); // Stocke le token dans sessionStorage
                    localStorage.removeItem('rememberedEmail'); // Supprime l'email si non coché
                    console.log('Token sauvegardé dans sessionStorage:', sessionStorage.getItem('token'));
                }

                // Récupère les informations du profil après connexion
                dispatch(getUserProfile())
                    .unwrap()
                    .then(() => {
                        navigate('/UserProfile');
                    })
                    .catch((error) => {
                        console.error('Échec de la récupération du profil utilisateur:', error);
                    });
            })
            .catch((error) => {
                console.error('Échec de la connexion:', error);
            });
    };

    // Met à jour l'état de la case "Remember Me"
    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                {!isConnected && (
                    <form onSubmit={handleLogin}>
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
                            <input
                                type="checkbox"
                                id="remember-me"
                                checked={rememberMe}
                                onChange={handleRememberMeChange} // Gère le changement d'état de la case à cocher
                            />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="sign-in-button" type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Sign In'}
                        </button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                )}
            </section>
        </main>
    );
}

export default SignInForm;
