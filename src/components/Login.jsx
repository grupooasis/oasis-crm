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
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h2>Login Oasis</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" /><br />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
