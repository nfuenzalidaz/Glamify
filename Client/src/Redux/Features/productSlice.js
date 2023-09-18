import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = '/product';

const initialState = {
  loading: false,
  allProducts: [],
  productosFiltrados: [],
  productsCopy: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const searchProducts = createAsyncThunk(
  'product/searchProducts',
  async (searchString, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}?name=${searchString}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async ({ productId, estado }, { rejectWithValue }) => {
    try {
      await axios.put(`${URL}/${productId}`, { estado: false }); // Asegúrate de pasar estado: false aquí
      return productId; // Devolver el ID del producto eliminado
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    //Ordenamiento alfabético o por precio
    productSort: (state, action) => {
      let productos = [...state.allProducts];
      if (action.payload === 'asc') {
        productos.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === 'desc') {
        productos.sort((a, b) => b.name.localeCompare(a.name));
      } else if (action.payload === 'precioMin') {
        productos.sort((a, b) => a.price - b.price);
      } else if (action.payload === 'precioMax') {
        productos.sort((a, b) => b.price - a.price);
      }
      state.allProducts = productos;
    },

    //Restablecer ordenamientos
    resetFilters: (state) => {
      state.allProducts = state.productsCopy;
    },
    productType: (state, action) => {
      let todoProductosCopia = [...state.productsCopy];
      let productos = [...state.productsCopy];
      productos = productos.filter(
        (producto) => producto.category === action.payload
      );
      state.allProducts =
        action.payload === '' ? todoProductosCopia : productos;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.productosFiltrados = action.payload;
      state.productsCopy = action.payload;
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });

    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = state.allProducts.filter(
        (product) => product.id !== action.payload
      );
      state.productosFiltrados = state.productosFiltrados.filter(
        (product) => product.id !== action.payload
      );
      state.error = '';
    });

    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });

    builder.addCase(searchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = '';
    });
    builder.addCase(searchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export default productSlice.reducer;

export const { productSort, resetFilters, productType } = productSlice.actions;
