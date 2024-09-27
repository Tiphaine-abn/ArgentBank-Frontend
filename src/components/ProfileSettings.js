import React, { useState } from 'react';
import './style/ProfileSettings.css';

function ProfileSettings({ onSave }) {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        // Ajouter une logique pour sauvegarder les informations de l'utilisateur
        if (onSave) {
            onSave({ username, firstname, lastname });
        }
    };

    return (
        <div className="header">
            {/* Ajouter l'autre état avec le titre <h1>Welcome back<br /> {firstName} {lastName}</h1> 
            et le <button className="edit-button" onClick=()>Edit Name</button>*/}
            <h1>Edit user info</h1>
            <section className="sign-up-content">
                <form onSubmit={handleSave}>
                    <div className="sign-up-input-wrapper">
                        <label htmlFor="username">User name:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="sign-up-input-wrapper">
                        <label htmlFor="firstname">First name:</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="sign-up-input-wrapper">
                        <label htmlFor="lastname">Last name:</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit" className="sign-up-button">Save</button>
                        <button type="button" className="sign-up-button">Cancel</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default ProfileSettings;
