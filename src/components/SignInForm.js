import React from 'react';
import './style/SignInForm.css';
import { userLogin } from '../features/userLogin';

// Gestionnaire d'évènement du formulaire d'authentification
const login = (event) => {
    console.log("TOTO");
    event.preventDefault();
}

function SignInForm() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <a href="./userprofile" className="sign-in-button">
                        Fake Sign In
                    </a>
                    <button className="sign-in-button" onClick={login}>Sign In</button>
                </form>
            </section>
        </main>
    );
}

export default SignInForm;