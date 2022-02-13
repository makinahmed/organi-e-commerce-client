import { configureStore } from "@reduxjs/toolkit";
import featuresReducer from "../Slice/featureSlice";
import popularProductsReducer from "../../RTK/Slice/popularProductsSlice";
import blogReducer from "../../RTK/Slice/blogSlice";
export const store = configureStore({
  reducer: {
    features: featuresReducer,
    populars: popularProductsReducer,
    blogs: blogReducer,
  },
});
