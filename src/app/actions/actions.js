import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001/api/v1';

// LOG_IN : Action pour la connexion de l'utilisateur
export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }) => {
        // Effectue une requête POST pour authentifier l'utilisateur
        const response = await fetch(`${backendURL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erreur d’authentification : ${errorData.message || 'inconnue'}`);
        }

        const data = await response.json();
        // Vérifie si le token est présent dans la réponse
        if (!data.body || !data.body.token) {
            throw new Error('Le token est manquant');
        }

        console.log('Token récupéré :', data.body.token);

        return data.body.token; // Retourne le token
    }
);

// GET_USER_PROFILE : Action pour récupérer le profil de l'utilisateur
export const getUserProfile = createAsyncThunk(
    'user/getUserProfile',
    async (_, { getState }) => {
        const { token } = getState().user; // Récupère le token dans Redux

        // Vérifie si le token est présent
        if (!token) {
            throw new Error('Token not found');
        }

        // Effectue une requête GET pour récupérer les données du profil
        const response = await fetch(
            `${backendURL}/user/profile`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        // Vérifie si la réponse est correcte
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération du profil');
        }

        const data = await response.json();
        return data.body; // Renvoie les informations du profil utilisateur
    }
);

// LOG_OUT : Action pour déconnecter l'utilisateur
export const userLogout = () => {
    return { type: 'user/logout' }; // Retourne une action de déconnexion
};

// MODIFY_PROFILE : Action pour modifier le profil de l'utilisateur
export const modifyUserProfile = createAsyncThunk(
    'user/modifyProfile',
    async ({ token, profileData }) => {
        // Effectue une requête PUT pour mettre à jour le profil
        const response = await fetch(`${backendURL}/user/profile`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData), // Envoie les données mises à jour
        });

        // Vérifie si la réponse est correcte
        if (!response.ok) {
            throw new Error('Erreur de mise à jour du profil');
        }

        const data = await response.json();
        return data.body; // Retourne les données mises à jour
    }
);



