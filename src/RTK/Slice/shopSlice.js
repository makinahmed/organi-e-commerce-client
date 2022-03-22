import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShop = createAsyncThunk(
  `shops/fetchShop`,
  async (category, min, max) => {
    const response = await fetch(
      `http://localhost:5000/shop/?category=${category}&min=${min}&max=${max}`
    ).then((res) => res.json());
    return response;
  }
);

export const shopSlice = createSlice({
  name: "shops",
  initialState: {
    displayShop: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShop.fulfilled, (state, action) => {
      state.displayShop = action.payload;
    });
  },
});

export const { filterCategory } = shopSlice.actions;
export default shopSlice.reducer;
