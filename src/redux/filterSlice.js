import { createSlice } from "@reduxjs/toolkit";
import api, { apiEndPoints } from "../api";

const initialState = {
  materials: [],
  colors: [],
  material: null,
  color: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setMaterials(state, action) {
      return {
        ...state,
        materials: action.payload,
      };
    },
    setColors(state, action) {
      return {
        ...state,
        colors: action.payload,
      };
    },
    setMaterial(state, action) {
      return {
        ...state,
        material: action.payload,
      };
    },
    setColor(state, action) {
      return {
        ...state,
        color: action.payload,
      };
    },
  },
});

export const fetchMaterials = () => async (dispatch) => {
  const response = await api.get(apiEndPoints.material);
  dispatch(filterActions.setMaterials(response.data.material));
};

export const fetchColors = () => async (dispatch) => {
  const response = await api.get(apiEndPoints.colors);
  dispatch(filterActions.setColors(response.data.colors));
};

export const filterActions = filterSlice.actions;
export const filterReducers = filterSlice.reducer;
