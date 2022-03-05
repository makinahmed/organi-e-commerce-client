import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShop = createAsyncThunk(
  `shops/fetchShop`,
  async (category) => {
    const response = await fetch(
      `http://localhost:5000/shop/?category=${category}`
    ).then((res) => res.json());
    console.log(category, " i am category");
    console.log(response, " i am response");
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
