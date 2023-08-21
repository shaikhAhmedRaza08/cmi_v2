import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      if (state.find((item) => item.id === action.payload.id)) {
        return state;
      } else {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducers = cartSlice.reducer;
