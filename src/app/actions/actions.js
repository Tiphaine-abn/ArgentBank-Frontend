// 1. LOG_IN
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001/api/v1';

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }) => {
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
        if (!data.body || !data.body.token) {
            throw new Error('Le token est manquant');
        }

        return data.body.token; // Retourne le token
    }
);

// 2. GET_USER_PROFILE
export const getUserProfile = createAsyncThunk(
    'user/getUserProfile',
    async (_, { getState }) => {
        const { token } = getState().user; // Récupère le token dans Redux

        if (!token) {
            throw new Error('Token not found');
        }

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

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération du profil');
        }

        const data = await response.json();
        return data.body; // Renvoie les informations du profil utilisateur
    }
);

// 3. LOG_OUT
export const userLogout = () => {
    return { type: 'user/logout' };
};

// 4. MODIFY_PROFILE
export const modifyUserProfile = createAsyncThunk(
    'user/modifyProfile',
    async ({ token, profileData }) => {
        const response = await fetch(`${backendURL}/user/profile`, {
            method: 'PUT',
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        });

        if (!response.ok) {
            throw new Error('Erreur de mise à jour du profil');
        }

        const data = await response.json();
        return data.body; // Retourne les données mises à jour
    }
);



