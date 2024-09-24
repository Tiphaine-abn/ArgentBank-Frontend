import React from 'react';
import './style/Header.css';
import logo from '../assets/img/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" /></NavLink>
            <NavLink className="main-nav-item" to="/signin"><i className="fa fa-user-circle"></i>Sign In</NavLink>
        </header >
    );
}

export default Header;