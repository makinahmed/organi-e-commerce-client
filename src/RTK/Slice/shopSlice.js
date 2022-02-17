import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShop = createAsyncThunk("shops/fetchShop", async () => {
  const response = fetch("http://localhost:5000/shop").then((res) =>
    res.json()
  );
  // console.log(response)
  return response;
});

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

export default shopSlice.reducer;
