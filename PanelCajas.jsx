import { useNavigate } from 'react-router-dom';

function PanelCajas() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Panel de Cajas</h2>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => navigate('/caja-diaria')}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Caja Diaria
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-400 text-white p-2 rounded mt-4"
          >
            ← Volver al Panel Principal
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PanelCajas;
