import { configureStore } from "@reduxjs/toolkit";
import { productReducers } from "./productSlice";
import { cartReducers } from "./cartSlice";
import { featuredProductReducers } from "./featuredProductSlice";
import { filterReducers } from "./filterSlice";

export const store = configureStore({
  reducer: {
    products: productReducers,
    cart: cartReducers,
    featuredProducts: featuredProductReducers,
    filters: filterReducers,
  },
});
