import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const cajas = [
  'Home Banking',
  'Caja 1',
  'Caja 2',
  'Caja en dólares',
  'Criptomonedas',
  'Cheques'
];

function CajaDiaria() {
  const [registros, setRegistros] = useState([]);
  const [cierres, setCierres] = useState([]);
  const [monto, setMonto] = useState('');
  const [tipo, setTipo] = useState('Ingreso');
  const [detalle, setDetalle] = useState('');
  const [cajaSeleccionada, setCajaSeleccionada] = useState('Home Banking');
  const componentePDF = useRef();

  const agregarRegistro = () => {
    if (!monto || isNaN(parseFloat(monto))) return alert('Ingresá un monto válido.');
    const nuevo = {
      monto: parseFloat(monto),
      tipo,
      detalle,
      caja: cajaSeleccionada,
      fecha: new Date().toLocaleString()
    };
    setRegistros([nuevo, ...registros]);
    setMonto('');
    setDetalle('');
  };

  const calcularBalance = () => {
    const ingresos = registros.filter(r => r.tipo === 'Ingreso').reduce((sum, r) => sum + r.monto, 0);
    const egresos = registros.filter(r => r.tipo === 'Egreso').reduce((sum, r) => sum + r.monto, 0);
    return ingresos - egresos;
  };

  const generarPDF = useReactToPrint({
    content: () => componentePDF.current,
    documentTitle: `Cierre_Caja_${new Date().toLocaleDateString()}`
  });

  const guardarCierre = () => {
    if (registros.length === 0) return alert('No hay movimientos cargados.');
    const nuevoCierre = {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
      caja: cajaSeleccionada,
      balance: calcularBalance(),
      movimientos: registros
    };
    setCierres([nuevoCierre, ...cierres]);
    setRegistros([]);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Caja Diaria</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="border p-2 rounded"
        />
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Ingreso">Ingreso</option>
          <option value="Egreso">Egreso</option>
        </select>
        <input
          type="text"
          placeholder="Detalle"
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          className="border p-2 rounded col-span-2"
        />
        <select
          value={cajaSeleccionada}
          onChange={(e) => setCajaSeleccionada(e.target.value)}
          className="border p-2 rounded col-span-2"
        >
          {cajas.map(c => <option key={c}>{c}</option>)}
        </select>
        <button
          onClick={agregarRegistro}
          className="bg-blue-600 text-white p-2 rounded col-span-2"
        >
          Agregar Movimiento
        </button>
        <button
          onClick={() => {
            generarPDF();
            guardarCierre();
          }}
          className="bg-green-600 text-white p-2 rounded col-span-2"
        >
          Generar Cierre PDF y Guardar
        </button>
      </div>

      <div ref={componentePDF} className="mb-4">
        <h3 className="font-semibold">Balance del Día: ${calcularBalance().toFixed(2)}</h3>
        <h3 className="font-semibold mb-2">Movimientos</h3>
        <ul className="space-y-2">
          {registros.map((r, i) => (
            <li key={i} className="border p-2 rounded">
              <strong>{r.tipo}</strong> - ${r.monto.toFixed(2)} - {r.caja}<br />
              {r.detalle} <br />
              <small>{r.fecha}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="font-bold mb-2">Cierres Guardados</h3>
        <ul className="space-y-2">
          {cierres.map((cierre, i) => (
            <li key={i} className="border p-2 rounded">
              <strong>{cierre.fecha} {cierre.hora}</strong> — {cierre.caja} — Balance: ${cierre.balance.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CajaDiaria;
