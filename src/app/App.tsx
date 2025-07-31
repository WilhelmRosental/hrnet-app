import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import Navigation from '../../components/Navigation/Navigation';
import Employees from './employees/page';

export default function App() {
  // Ici, vous pouvez ajouter un router si besoin (ex: react-router)
  // Pour l'instant, on affiche la page Employees directement
  return (
    <Provider store={store}>
      <Navigation />
      <Employees />
    </Provider>
  );
}
