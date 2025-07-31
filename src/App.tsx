import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Employees from './pages/Employees/Employees';

const AppContainer = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'center',
  backgroundColor: '#f5f5f5'
};

const Main = {
  height: '100%',
  maxWidth: '792px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '16px',
  padding: '8px',
  backgroundColor: '#ffffff',
  margin: '16px 0',
  borderRadius: '10px'
};

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'employees'>('home');

  return (
    <Provider store={store}>
      <div style={AppContainer}>
        <div style={Main}>
          <Header />
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
          {currentPage === 'home' && <Home />}
          {currentPage === 'employees' && <Employees />}
        </div>
      </div>
    </Provider>
  );
}

export default App;