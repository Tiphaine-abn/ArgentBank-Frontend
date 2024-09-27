// Gestionnaire d'état de l'authentification

import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../../features/userLogin';

const initialState = {
    isConnected: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(userLogin.fulfilled, (state) => {
                state.loading = false;
                state.isConnected = true;
            })
            .addCase(userLogin.rejected, (state) => {
                state.loading = false;
                state.isConnected = false;
            })
    }
});

export const authReducer = slice.reducer;