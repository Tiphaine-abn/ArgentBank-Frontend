import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../features/userSlice';
import './style/Header.css';
import logo from '../assets/img/argentBankLogo.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isConnected = useSelector((state) => state.user.isConnected);
    console.log('Utilisateur connecté :', isConnected);
    const profile = useSelector((state) => state.user.profile); // Récupère les infos du profil
    console.log('Données du profile :', profile);

    // Vérifie si l'utilisateur est connecté en vérifiant la présence d'un token
    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!token) {
            dispatch(logOut()); // Déconnecte l'utilisateur si aucun token n'est présent
        }
    }, [dispatch]);

    // Fonction pour gérer la déconnexion
    const handleLogout = () => {
        dispatch(logOut());
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate('/');
    };

    return (
        <header className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            </NavLink>

            {/* Options de navigation selon l'état de connexion de l'utilisateur */}
            {isConnected ? (
                <div className="main-nav-item">
                    <NavLink className="user-info" to="/userprofile">
                        <i className="fa fa-user-circle"></i>
                        <span> {profile?.userName || profile?.firstName} </span> {/* Affiche le nom d'utilisateur ou le prénom */}
                    </NavLink>
                    <NavLink
                        to="/"
                        className="logout-button"
                        onClick={handleLogout} // Déconnexion lors du clic
                    >
                        <i className="fa fa-right-from-bracket"></i> Sign Out
                    </NavLink>
                </div>
            ) : (
                <NavLink className="user-button" to="/signin">
                    <i className="fa fa-user-circle"></i> Sign In
                </NavLink>
            )}
        </header>
    );
}

export default Header;