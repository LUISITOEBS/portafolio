import { createSlice } from '@reduxjs/toolkit';

export const proyectoSlice = createSlice({
    name: 'proyecto',
    initialState: {
        proyecto: null
    },
    reducers: {
        setProyecto: (state, {payload} ) => {
            state.proyecto = payload;
        },
        unsetProyecto: ( state ) => {
            state.proyecto = null;
        },
    }
});


export const { setProyecto, unsetProyecto } = proyectoSlice.actions;