import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DashboardDirectorio from './components/DashboardDirectorio';
import PanelCajas from './components/PanelCajas';
import CajaDiaria from './components/CajaDiaria';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={user?.rol === 'directorio' ? <DashboardDirectorio /> : <Navigate to="/login" />} />
        <Route path="/cajas" element={user?.rol === 'directorio' ? <PanelCajas /> : <Navigate to="/login" />} />
        <Route path="/caja-diaria" element={user?.rol === 'directorio' ? <CajaDiaria /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
