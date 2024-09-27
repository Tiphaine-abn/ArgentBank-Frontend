// Requête réseau pour l'authentification

import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:3001';

export const userLogin = createAsyncThunk(
    'user/login',
    async ({ email, password }) => {
        const response = await fetch(
            `${backendURL}/user/login`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password })
            }
        );
        const data = await response.json();
        console.log(data);
    }
)