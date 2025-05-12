import { useNavigate } from 'react-router-dom';

function DashboardDirectorio() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20 }}>
      <h2>Panel del Directorio</h2>
      <button onClick={() => navigate('/cajas')}>Ir a Cajas</button>
    </div>
  );
}

export default DashboardDirectorio;
