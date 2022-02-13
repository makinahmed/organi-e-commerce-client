import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchBlog = createAsyncThunk("blogs/fetchBlog", async () => {
  const response = await fetch("http://localhost:5000/blog").then((res) =>
    res.json()
  );
  return response;
});
export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    displayBlog: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBlog.fulfilled, (state, action) => {
      state.blog = action.payload;
    });
  },
});

export default blogSlice.reducer;
