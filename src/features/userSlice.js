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
            state.token = action.payload;
            state.isConnected = true;
            state.loading = false;
            state.error = null;
        },
        logOut: (state) => {
            state.token = null;
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
                state.loading = false;
                state.isConnected = true;
                state.token = action.payload; // Stocker le token
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Gérer l'erreur
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.profile = action.payload; // Stocker le profil
            })
            .addCase(modifyUserProfile.fulfilled, (state, action) => {
                state.profile = action.payload; // Mettre à jour le profil
            });
    },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
export { userLogin, getUserProfile, modifyUserProfile };