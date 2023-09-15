import { Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import HomePage from "./Components/Home/HomePage.jsx";
import CreateProducts from "./Components/CreateProducts/CreateProducts.jsx";
import { fetchProducts } from '../src/Redux/Features/productSlice.js';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL="http://localhost:3001";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
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

export default App
