import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./productSlice";

export const store = configureStore({
  reducer: {
    products: productReducers,
  },
});
