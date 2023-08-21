import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./productSlice";
import { cartReducers } from "./cartSlice";
import { featuredProductReducers } from "./featuredProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducers,
    cart: cartReducers,
    featuredProducts: featuredProductReducers,
  },
});
