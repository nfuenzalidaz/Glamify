import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.jsx';
import HomePage from './Components/Home/HomePage.jsx';
import { fetchProducts } from '../src/Redux/Features/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ProductDetail from './Components/DetailPage/ProductDetail.jsx';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx';
import Profile from './Components/Profile/Profile.jsx';
import axios from 'axios';
import WomanProduct from './Components/Woman/WomanProduct.jsx';
import ManProduct from './Components/Man/ManProduct.jsx';
import AccesoryProduct from './Components/Accesories/AccesoryProduct.jsx';
import Logged from './Components/Logged/Logged.jsx';
import Admin from './Components/Admin/Dashboard/Dashboard.jsx';
import CreateProduct from './Components/Admin/CreateProducts/CreateProduct.jsx';
import Productos from './Components/Admin/Productos/Productos.jsx';
import Adminlogin from './Components/Admin/LogAdmin/LogAdmin.jsx';
import Users from './Components/Admin/Users/Users.jsx';
import Cards from './Components/Admin/Cards/Cards.jsx';

axios.defaults.baseURL = import.meta.env.VITE_BACK_URL;
const validEmail = 'elchamakio@gmail.com';
const validPassword = 'niandertal2023';
function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	const [access, setAcces] = useState(false);

	const login = (userData) => {
		if (userData.email === validEmail && userData.password === validPassword) {
			setAcces(true);
			navigate('/admin');
		}
	};

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<div>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/home' element={<HomePage />} />
				<Route path='/cart' element={<ShoppingCart />} />
				<Route path='/logged' element={<Logged />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/product/:id' element={<ProductDetail />} />
				<Route path='/hombre' element={<ManProduct />} />
				<Route path='/mujer' element={<WomanProduct />} />
				<Route path='/accesorios' element={<AccesoryProduct />} />
			</Routes>
			{access && (
				<Routes>
					<Route path='/admin' element={<Admin />} />
					<Route path='/admin/create' element={<CreateProduct />} />
					<Route path='/admin/productos' element={<Productos />} />
					<Route path='/admin/usuarios' element={<Users />} />
					<Route path='/admin/productos' element={<Cards />} />
				</Routes>
			)}

			{!access && (
				<Routes>
					<Route path='/admin/login' element={<Adminlogin login={login} />} />
				</Routes>
			)}
		</div>
	);
}
export default App;
