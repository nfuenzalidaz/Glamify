import { Routes, Route, useParams } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import HomePage from './Components/Home/HomePage.jsx';
import CreateProducts from './Components/CreateProducts/CreateProduct.jsx';
import { fetchProducts } from '../src/Redux/Features/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductDetail from './Components/DetailPage/ProductDetail.jsx';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx';
import Profile from './Components/Profile/Profile.jsx';
import axios from 'axios';
import WomanProduct from './Components/Woman/WomanProduct.jsx';
import ManProduct from './Components/Man/ManProduct.jsx';
import AccesoryProduct from './Components/Accesories/AccesoryProduct.jsx';

axios.defaults.baseURL = import.meta.env.VITE_BACK_URL;

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/create' element={<CreateProducts />} />
        <Route path='/hombre' element={<ManProduct />} />
        <Route path='/mujer' element={<WomanProduct />} />
        <Route path='/accesorios' element={<AccesoryProduct />} />
      </Routes>
    </div>
  );
}

export default App
