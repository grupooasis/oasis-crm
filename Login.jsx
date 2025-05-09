import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'facundo.m@grupooasis.com.ar' && password === 'oasis2024') {
      onLogin({ nombre: 'Facundo', rol: 'directorio' });
      navigate('/');
    } else if (email === 'ernesto.o@grupooasis.com.ar' && password === 'oasis2024') {
      onLogin({ nombre: 'Ernesto', rol: 'directorio' });
      navigate('/');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Oasis CRM</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
