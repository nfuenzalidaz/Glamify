import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import HomePage from "./Components/Home/HomePage.jsx";
import CreateProducts from "./Components/CreateProducts/CreateProducts.jsx";
import { fetchProducts } from '../src/Redux/Features/productSlice.js';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import FormPerfil from './Components/Formulario/FormPerfil.jsx';
import { Header } from "./Components/Header.jsx";
import { ProductList} from "./Components/ProductList.jsx"
import { useState } from "react";

axios.defaults.baseURL = "http://localhost:3001";

function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal ] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  
  return (
    <div>
      <>
      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
      </>
      <Routes>
        <Route path="/formperfil" element={<FormPerfil />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateProducts />} />
        <Route path="/hombre" element={<h1>Hombre</h1>} />
        <Route path="/mujer" element={<h1>Mujer</h1>} />
        <Route path="/accesorios" element={<h1>Accesorios</h1>} />
      </Routes>
    </div>
  )
}

export default App;
