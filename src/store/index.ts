import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formSlice } from './formSlice'
import { IStateEmployeeData } from '../types'

// Combine the reducers
const rootReducer = combineReducers({
    employeeData: formSlice.reducer,
})

// Fonction pour charger l'état depuis localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('persistantState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

// Fonction pour sauvegarder l'état dans localStorage
const saveToLocalStorage = (state: IStateEmployeeData) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('persistantState', serializedState);
    } catch (e) {
        console.warn(e);
    }
}

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
})

// Sauvegarder l'état dans localStorage à chaque modification
store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage(state);
});

// Type pour RootState
export type RootState = ReturnType<typeof rootReducer>
