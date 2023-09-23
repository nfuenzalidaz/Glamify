import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    itemQuantity: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.cart.push({ ...newItem, quantity: 1 });
        state.itemQuantity += 1;
      }
        else if (existingItem.quantity < existingItem.stock) {
             existingItem.quantity += 1;
             state.itemQuantity += 1;
        }
        else {
            alert('No hay productos en stock');
        }
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cart.findIndex((item) => item.id === itemId);
      const item = state.cart.find((item) => item.id === itemId);

      if (itemIndex !== -1) {
        state.itemQuantity -= item.quantity;
        state.cart.splice(itemIndex, 1);
      }
    },
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item && item.quantity < item.stock) {
        item.quantity += 1;
        state.itemQuantity += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cart.find((item) => item.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.itemQuantity -= 1;
    }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

