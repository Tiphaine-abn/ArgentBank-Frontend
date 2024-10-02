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
    console.log(isConnected);
    const profile = useSelector((state) => state.user.profile); // Récupère les infos du profil
    console.log(profile);

    const handleLogout = () => {
        dispatch(logOut()); // Déclenche l'action de déconnexion
        navigate('/'); // Redirige vers la page d'acueil    
    };

    return (
        <header className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            </NavLink>

            {/* Si l'utilisateur est connecté */}
            {isConnected ? (
                <div className="main-nav-item">
                    <NavLink className="user-info" to="/userprofile">
                        <i className="fa fa-user-circle"></i>
                        <span> {profile?.userName || profile?.firstName} </span>
                    </NavLink>
                    <NavLink
                        to="/"
                        className="logout-button"
                        onClick={handleLogout}
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