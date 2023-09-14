import { setAllProducts, setProductById, setProductByName } from "../slices/productsSlice";
import axios from "axios";

const URL = "http://localhost:3001/product"

export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(URL);
        const data = response.data;
        dispatch(setAllProducts(data));
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        const data = response.data;
        dispatch(setProductById(data));
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`${URL}?name=${name}`);
        const data = response.data;
        dispatch(setProductByName(data));
    } catch (error) {
        console.log(error.message);
    }
}