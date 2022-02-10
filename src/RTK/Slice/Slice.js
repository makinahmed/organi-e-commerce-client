import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: []
};
const fetchFeatures = createAsyncThunk(
  "features/fetchFeatures",
  async () => {
    const response = await fetch("")
    return response.data;
  }
);

export const featureSlice = createSlice({
  name: "featureProduct",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = featureSlice.actions;

export default featureSlice.reducer;
