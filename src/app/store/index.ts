// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { formSlice } from './formSlice'
// import { IStateEmployeeData } from '../../types'

// const rootReducer = combineReducers({
//     employeeData: formSlice.reducer,
// })

// // load state from local storage
// const loadFromLocalStorage = () => {
//     try {
//         const serialisedState = localStorage.getItem('persistantState')
//         if (serialisedState === null) return undefined
//         return JSON.parse(serialisedState)
//     } catch (e) {
//         console.warn(e)
//         return undefined
//     }
// }

// // save state to local storage
// const saveToLocalStorage = (state: IStateEmployeeData) => {
//     try {
//         const serialisedState = JSON.stringify(state)
//         localStorage.setItem('persistantState', serialisedState)
//     } catch (e) {
//         console.warn(e)
//     }
// }

// const preloadedState = loadFromLocalStorage()

// export const store = configureStore({
//     reducer: rootReducer,
//     preloadedState,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: true,
//         }),
// })

// // Saving the state in local storage each time it is modified
// store.subscribe(() => {
//     const state = store.getState()
//     saveToLocalStorage(state)
// })

// // Doc REDUX
// // Type RootState en dehors du configureStore pour éviter la référence circulaire
// // Module A dépend de B et inversement
// export type RootState = ReturnType<typeof rootReducer>


import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { formSlice } from './formSlice'
import { IStateEmployeeData } from '../../types'

// Combine the reducers
const rootReducer = combineReducers({
    employeeData: formSlice.reducer,
})

// Vérifiez si le code est exécuté côté client (navigateur)
const isClient = typeof window !== 'undefined';

// Fonction pour charger l'état depuis localStorage (côté client uniquement)
const loadFromLocalStorage = () => {
    if (!isClient) return undefined; // Retourne undefined côté serveur

    try {
        const serializedState = localStorage.getItem('persistantState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

// Fonction pour sauvegarder l'état dans localStorage (côté client uniquement)
const saveToLocalStorage = (state: IStateEmployeeData) => {
    if (!isClient) return; // Ne fait rien côté serveur

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
    preloadedState, // Précharge l'état depuis localStorage si côté client
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
})

// Sauvegarder l'état dans localStorage à chaque modification (côté client uniquement)
if (isClient) {
    store.subscribe(() => {
        const state = store.getState();
        saveToLocalStorage(state);
    });
}

// Type pour RootState
export type RootState = ReturnType<typeof rootReducer>
