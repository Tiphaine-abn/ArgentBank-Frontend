import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';

// Sauvegarder l'état dans localStorage
const saveState = (state) => {
    localStorage.setItem('reduxState', JSON.stringify(state)); // Convertit l'état en chaîne JSON et l'enregistre dans localStorage sous la clé 'reduxState'= conserve l'état même après rechargement

};

// Charger l'état depuis localStorage
const loadState = () => {
    const savedState = localStorage.getItem('reduxState'); // Récupérer l'état stocké dans localStorage
    return savedState ? JSON.parse(savedState) : undefined; // Si trouvé, le renvoie sous forme d'objet JavaScript, sinon renvoie undefined
};

// Charger l'état initial depuis localStorage
const initialState = loadState(); // Restaure l'état précédent lorsque l'utilisateur rouvre l'application

// Configurer le store Redux
const store = configureStore({
    reducer: {
        user: userReducer, // L'état de l'utilisateur sera géré par ce réducteur
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