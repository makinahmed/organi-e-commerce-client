import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPopularProducts = createAsyncThunk(
  "popular/fetchPopularProducts",
  async () => {
    const response = await fetch("http://localhost:5000/popularProduct").then(
      (res) => res.json()
    );
     
    return response;
  }
);

export const popularProductSlice = createSlice({
  name: "popularProduct",
  initialState: {
    displayPopularProduct: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularProducts.fulfilled, (state, action) => {
      state.displayPopularProduct = action.payload;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = featureSlice.actions;

export default popularProductSlice.reducer;
