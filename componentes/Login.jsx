const Login = () => {
  return (
    <div>
      <label htmlFor="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Contraseña:</label>
      <input type="password" id="password" name="password" required />
    </div>
  );
}

export default Login;

