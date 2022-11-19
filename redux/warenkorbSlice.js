import { createSlice } from "@reduxjs/toolkit";

const warenkorbSlice = createSlice({
  name: "warenkorb",
  initialState: {
    products: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.amount;
    },
    empty: (state) => {
      state = initialState;
    },
    deleteProduct: (state, action) => {
      const leftProducts = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.products = leftProducts;
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.amount;
    },
  },
});

export const { deleteProduct, addProducts, empty } = warenkorbSlice.actions;
export default warenkorbSlice.reducer;
