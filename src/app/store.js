import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';

// Sauvegarder l'état dans localStorage
const saveState = (state) => {
    localStorage.setItem('reduxState', JSON.stringify(state)); // Enregistre l'état sous 'reduxState'
};

// Charger l'état depuis localStorage
const loadState = () => {
    const savedState = localStorage.getItem('reduxState'); // Récupérer l'état stocké dans localStorage
    return savedState ? JSON.parse(savedState) : undefined; // Renvoie l'état ou undefined
};

// Charger l'état initial depuis localStorage
const initialState = loadState(); // Restaure l'état précédent lorsque l'utilisateur rouvre l'application

// Configurer le store Redux
const store = configureStore({
    reducer: {
        user: userReducer, // Gère l'état de l'utilisateur
    },
    preloadedState: initialState, // Définit l'état initial
});

// Écouter les changements d'état et sauvegarder dans localStorage
store.subscribe(() => {
    saveState(store.getState());
});

// Effacer l'état de l'utilisateur dans localStorage à sa déconnexion
store.subscribe(() => {
    const state = store.getState();
    if (state.user.token === null) {
        localStorage.removeItem('reduxState');
    }
});

export default store;