import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import HomePage from "./Components/Home/HomePage.jsx";
import CreateProducts from "./Components/CreateProducts/CreateProducts.jsx";
import { fetchProducts } from "../src/Redux/Features/productSlice.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import Hombres from "./Components/Hombres/Hombres.jsx";
import Mujeres from "./Components/Mujeres/Mujeres.jsx";
import Accesorios from "./Components/Accesorios/Accesorios.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateProducts />} />
        <Route path="/hombre" element={<Hombres />} />
        <Route path="/mujer" element={<Mujeres />} />
        <Route path="/accesorios" element={<Accesorios />} />
      </Routes>
    </>
  );
}

export default App;
