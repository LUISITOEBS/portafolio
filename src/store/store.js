import { configureStore } from '@reduxjs/toolkit';
import { modalSlice } from './modal/modalSlice';
import { proyectoSlice } from './proyecto/proyectoSlice';

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false,
    }),

    reducer:{
        modal:        modalSlice.reducer,
        proyecto:     proyectoSlice.reducer,
    }
});