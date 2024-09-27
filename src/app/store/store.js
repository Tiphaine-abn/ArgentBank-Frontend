// Configuration du store Redux pour stocker l'état de l'application

import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./authSlice"

export const store = configureStore(
    {
        reducer: {
            auth: authReducer
        }
    }
)