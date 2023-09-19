import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import HomePage from "./Components/Home/HomePage.jsx";
import CreateProducts from "./Components/CreateProducts/CreateProduct.jsx";
import { fetchProducts } from '../src/Redux/Features/productSlice.js';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; 
import ProductDetail from "./Components/DetailPage/ProductDetail.jsx";
import axios from "axios";
axios.defaults.baseURL="http://localhost:3001";
import { Header } from './Components/Header.jsx';
import FormPerfil from "./Components/Formulario/FormPerfil";
import { ProductList } from './Components/ProductList'; 

function App() {
  const dispatch = useDispatch();
  
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const productos = useSelector(state => state.productos);

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
        <Route path="/product/:id" element={<ProductDetail />}/>
        <Route path="/create" element={<CreateProducts />} />
        <Route path="/hombre" element={<h1>Hombre</h1>} />
        <Route path="/mujer" element={<h1>Mujer</h1>} />
        <Route path="/accesorios" element={<h1>Accesorios</h1>} />
      </Routes>
    </div>
  )
}

export default App;
