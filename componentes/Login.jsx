import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Aquí agregar la lógica de autenticación
  };

  return (
    <form >
     <div>
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
