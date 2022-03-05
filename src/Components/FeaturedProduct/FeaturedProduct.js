import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeatures } from "../../RTK/Slice/featureSlice";
import FeatureCard from "./FeatureCard";

const FeaturedProduct = () => {
  const features = useSelector((state) => state.features.displayFeatures);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeatures());
  }, []);
// 
  return (
    <Grid
      container
      sx={{ display: "flex", justifyContent: "center", gap: 5, margin: "auto" }}
    >
      {features.map((feature) => (
        <FeatureCard item xs={4} feature={feature} />
      ))}
    </Grid>
  );
};

export default FeaturedProduct;
