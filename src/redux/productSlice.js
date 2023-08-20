import { createSlice } from "@reduxjs/toolkit";
import api, { apiEndPoints } from "../api";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const fetchProducts = () => async (dispatch) => {
  const response = await api.get(apiEndPoints.products);
  dispatch(productActions.setProduct(response.data));
};

export const productActions = productSlice.actions;
export const productReducers = productSlice.reducer;
