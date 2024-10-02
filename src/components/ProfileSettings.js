import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyUserProfile, getUserProfile } from '../features/userSlice';
import './style/ProfileSettings.css';

function ProfileSettings() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile); // Récupère les informations du profil
    const token = useSelector((state) => state.user.token); // Récupère le token

    // Gestion de l'état des champs du profil
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [isEditing, setIsEditing] = useState(false); // mode non-édition par défaut

    // Récupération des informations du profil utilisateur lors du chargement du composant
    useEffect(() => {
        if (token) {
            dispatch(getUserProfile());
        }
    }, [token, dispatch]);

    // Mise à jour des champs du formulaire avec les données récupérées du profil utilisateur 
    useEffect(() => {
        if (profile) {
            setUsername(profile.username || '');
            setFirstname(profile.firstName || '');
            setLastname(profile.lastName || '');
        }
    }, [profile]);

    // Gestion du passage en mode édition
    const handleEditName = () => {
        setIsEditing(true);
    };

    // Enregistrement des modifications
    const handleSave = (e) => {
        e.preventDefault();
        const profileData = { userName: username, firstName: firstname, lastName: lastname };

        dispatch(modifyUserProfile({ token, profileData }))
            .unwrap()
            .then((updatedProfile) => {
                console.log('Réponse API:', updatedProfile);
                setIsEditing(false);
                console.log('Profil mis à jour avec succès!');
            })
            .catch((error) => {
                console.error('Échec de la mise à jour du profil:', error);
            });
    };

    return (
        <div className="header">
            {isEditing ? ( // Affiche le formulaire si l'utilisateur est en mode édition
                <section className="edit-profile-content">
                    <h1>Edit User Info</h1>
                    <form onSubmit={handleSave}>
                        <div className="edit-profile-input-wrapper">
                            <label htmlFor="username">User name:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="edit-profile-input-wrapper">
                            <label htmlFor="firstname">First name:</label>
                            <input
                                type="text"
                                id="firstname"
                                value={firstname}
                                readOnly
                            />
                        </div>
                        <div className="edit-profile-input-wrapper">
                            <label htmlFor="lastname">Last name:</label>
                            <input
                                type="text"
                                id="lastname"
                                value={lastname}
                                readOnly
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="edit-profile-button">Save</button>
                            <button type="button" className="edit-profile-button" onClick={() => setIsEditing(false)}>Cancel</button>
                        </div>
                    </form>
                </section>
            ) : ( // Affiche le message de bienvenue si l'utilisateur n'est pas en mode édition
                <div>
                    <h1>Welcome back <br /> {firstname} {lastname} !</h1>
                    <button className="edit-button" onClick={handleEditName}>Edit Name</button>
                </div>
            )}
        </div>
    );
}

export default ProfileSettings;
