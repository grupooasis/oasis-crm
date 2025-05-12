import { useState } from 'react';

const cajas = ['Home Banking', 'Caja 1', 'Caja 2', 'Caja en dólares', 'Criptomonedas', 'Cheques'];

function CajaDiaria() {
  const [registros, setRegistros] = useState([]);
  const [monto, setMonto] = useState('');
  const [tipo, setTipo] = useState('Ingreso');
  const [detalle, setDetalle] = useState('');
  const [caja, setCaja] = useState(cajas[0]);

  const agregar = () => {
    const nuevo = {
      monto: parseFloat(monto),
      tipo,
      detalle,
      caja,
      fecha: new Date().toLocaleString()
    };
    setRegistros([nuevo, ...registros]);
    setMonto('');
    setDetalle('');
  };

  const balance = registros.reduce((acc, r) => acc + (r.tipo === 'Ingreso' ? r.monto : -r.monto), 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Caja Diaria</h2>
      <input value={monto} onChange={e => setMonto(e.target.value)} placeholder="Monto" /><br />
      <select value={tipo} onChange={e => setTipo(e.target.value)}>
        <option>Ingreso</option>
        <option>Egreso</option>
      </select><br />
      <input value={detalle} onChange={e => setDetalle(e.target.value)} placeholder="Detalle" /><br />
      <select value={caja} onChange={e => setCaja(e.target.value)}>
        {cajas.map(c => <option key={c}>{c}</option>)}
      </select><br />
      <button onClick={agregar}>Agregar Movimiento</button>
      <h3>Balance: ${balance.toFixed(2)}</h3>
      <ul>
        {registros.map((r, i) => (
          <li key={i}>{r.tipo} - ${r.monto} - {r.detalle} ({r.caja}) - {r.fecha}</li>
        ))}
      </ul>
    </div>
  );
}

export default CajaDiaria;
