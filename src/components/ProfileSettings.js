import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyUserProfile, getUserProfile } from '../features/userSlice';
import './style/ProfileSettings.css';

function ProfileSettings() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile); // Récupère les informations du profil
    const token = useSelector((state) => state.user.token); // Récupère le token

    // État pour gérer les champs du profil
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [isEditing, setIsEditing] = useState(false); // Mode édition désactivé par défaut

    // Récupération des informations du profil lors du chargement du composant
    useEffect(() => {
        if (token) {
            dispatch(getUserProfile());
        }
    }, [token, dispatch]);

    // Mise à jour des champs avec les données récupérées
    useEffect(() => {
        if (profile) {
            setUsername(profile.username || '');
            setFirstname(profile.firstName || '');
            setLastname(profile.lastName || '');
        }
    }, [profile]);

    // Active le mode édition
    const handleEditName = () => {
        setIsEditing(true);
    };

    // Enregistre les modifications apportées
    const handleSave = (e) => {
        e.preventDefault();
        const profileData = { userName: username, firstName: firstname, lastName: lastname };

        dispatch(modifyUserProfile({ token, profileData }))
            .unwrap()
            .then((updatedProfile) => {
                console.log('Réponse API:', updatedProfile);
                setIsEditing(false); // Désactive le mode édition après sauvegarde
                console.log('Profil mis à jour avec succès!');
            })
            .catch((error) => {
                console.error('Échec de la mise à jour du profil:', error);
            });
    };

    return (
        <div className="header">
            {isEditing ? ( // Affiche le formulaire en mode édition
                <section className="edit-profile-content">
                    <h1>Edit User Info</h1>
                    <form onSubmit={handleSave}>
                        <div className="edit-profile-input-wrapper">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} // Met à jour le nom d'utilisateur
                            />
                        </div>
                        <div className="edit-profile-input-wrapper">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname"
                                value={firstname}
                                readOnly // Champ non modifiable
                            />
                        </div>
                        <div className="edit-profile-input-wrapper">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname"
                                value={lastname}
                                readOnly // Champ non modifiable
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="edit-profile-button">Save</button>
                            <button type="button" className="edit-profile-button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </form>
                </section>
            ) : ( // Affiche le message de bienvenue si non en mode édition
                <div>
                    <h1>Welcome back <br /> {firstname} {lastname} !</h1>
                    <button className="edit-button" onClick={handleEditName}>Edit Name</button>
                </div>
            )}
        </div>
    );
}

export default ProfileSettings;
