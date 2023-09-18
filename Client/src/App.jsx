import { Routes, Route, useParams } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import HomePage from "./Components/Home/HomePage.jsx";
import CreateProducts from "./Components/CreateProducts/CreateProduct.jsx";
import { fetchProducts } from '../src/Redux/Features/productSlice.js';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductDetail from "./Components/DetailPage/ProductDetail.jsx";
import axios from "axios";

axios.defaults.baseURL="http://localhost:3001";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
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

export default App
