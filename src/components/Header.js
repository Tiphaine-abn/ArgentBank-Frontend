import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Header.css';
import logo from '../assets/img/argentBankLogo.webp';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
    return (
        <header className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo" />
            </NavLink>
            <NavLink className="main-nav-item" to="/signin">
                <i className="fa fa-user-circle">
                </i> Sign In
            </NavLink>
            {/* Ajouter le Sign Out */}
        </header >
    );
}

export default Header;