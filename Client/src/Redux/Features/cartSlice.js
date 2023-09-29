import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  itemQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (!existingItem) {
        if (newItem.stock > 0) {
          state.cart.push({ ...newItem, quantity: 1 });
          state.itemQuantity += 1;
          state.totalPrice += newItem.price;
        }
        else {
          alert('No hay productos en stock');
        }  
      } else if (existingItem.quantity < existingItem.stock) {
        existingItem.quantity += 1;
        state.itemQuantity += 1;
        state.totalPrice += newItem.price;
      } else {
        alert('No hay productos en stock');
      }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === itemId);
      const item = state.cart.find((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.itemQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cart.splice(itemIndex, 1);
      }
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item && item.quantity < item.stock) {
        item.quantity += 1;
        state.itemQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.itemQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
      state.itemQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
