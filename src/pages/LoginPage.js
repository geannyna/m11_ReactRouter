import React, { useState } from 'react';
import checkCredentials from '../CheckCredentials';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica las credenciales utilizando la función checkCredentials.
    if (checkCredentials(email, password)) {
      navigate('/welcome'); // redirige al usuario a la página de bienvenida.
       // mostraremos un mensaje de éxito.
      alert('Autenticación exitosa');
    } else{
      alert('Error de autenticación');
    }
  };

  return (
    <div className='container_form'>
      
      <form className='form' onSubmit={handleSubmit}>
        <h2>Inicio de sesión</h2>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default LoginPage;



