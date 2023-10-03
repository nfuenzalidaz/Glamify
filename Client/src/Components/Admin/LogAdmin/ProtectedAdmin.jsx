// import { Navigate, Outlet } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

// function ProtectedAdmin() {
//   const envAdminEmail = process.env.REACT_APP_ADMIN_EMAIL;
//   const envAdminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

//   const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

//   const checkAdminAuthentication = (email, password) => {
//     if (email === envAdminEmail && password === envAdminPassword) {
//       setIsAdminAuthenticated(true);
//     } else {
//       setIsAdminAuthenticated(false);
//     }
//   };

//   useEffect(() => {
//     // Aquí puedes obtener el correo y la contraseña ingresados por el usuario.
//     // Puedes obtenerlos de tu estado local o de donde sea que los estés almacenando.

//     // Reemplaza 'userEnteredEmail' y 'userEnteredPassword' con las variables adecuadas.
//     const userEnteredEmail = /* Obtén el correo ingresado por el usuario */;
//     const userEnteredPassword = /* Obtén la contraseña ingresada por el usuario */;

//     checkAdminAuthentication(userEnteredEmail, userEnteredPassword);
//   }, []);

//   if (!isAdminAuthenticated) {
//     return <Navigate to='/' replace />;
//   }

//   return <Outlet />;
// }

// export default ProtectedAdmin;
