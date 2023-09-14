import React from 'react';
import Login from '@/componentes/Login';
import Search from '@/componentes/Search'; 

const Page = () => {
  return (
    <div>
      <h1>Bienvenido a Glamify Mi Tienda de Ropa</h1>
      <Search />
      <Login />
    </div>
  )
}

export default Page;
