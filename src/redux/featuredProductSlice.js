import { createSlice } from "@reduxjs/toolkit";
import api, { apiEndPoints } from "../api";

const initialState = {
  data: [],
};

const featuredProductSlice = createSlice({
  name: "featuredProduct",
  initialState,
  reducers: {
    setFeaturedProduct(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const fetchFeaturedProducts = () => async (dispatch) => {
  const response = await api.get(apiEndPoints.featured);
  dispatch(featuredProductActions.setFeaturedProduct(response.data?.featured));
};

export const featuredProductActions = featuredProductSlice.actions;
export const featuredProductReducers = featuredProductSlice.reducer;
