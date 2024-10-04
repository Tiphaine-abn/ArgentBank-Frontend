import { createSlice } from '@reduxjs/toolkit';
import { userLogin, getUserProfile, modifyUserProfile } from '../app/actions/actions'

// Gestion de l'état utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        isConnected: false,
        profile: null,
        loading: false,
        error: null,
    },
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload; // Stocke le token
            state.isConnected = true;
            state.loading = false;
            state.error = null;
        },
        logOut: (state) => {
            state.token = null; // Supprime le token
            state.isConnected = false;
            state.profile = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true; // Chargement en cours
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = false; // Fin du chargement
                state.isConnected = true;
                state.token = action.payload; // Stocke le token d'authentification
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Gère l'erreur de connexion
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.profile = action.payload; // // Stocke le profil utilisateur
            })
            .addCase(modifyUserProfile.fulfilled, (state, action) => {
                state.profile = action.payload; // Met à jour le profil utilisateur
            });
    },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
export { userLogin, getUserProfile, modifyUserProfile };