import { useNavigate } from 'react-router-dom';

function PanelCajas() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h2>Panel de Cajas</h2>
      <button onClick={() => navigate('/caja-diaria')}>Caja Diaria</button>
      <button onClick={() => navigate('/')}>← Volver al Panel</button>
    </div>
  );
}

export default PanelCajas;
