import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeatures } from "../../RTK/Slice/featureSlice";
import FeatureCard from "./FeatureCard";

const useStyle = makeStyles({
  feature: { fontSize: "clamp(2rem,10vw, 5rem)",margin: '1.5em auto' },
});
const FeaturedProduct = () => {
  const features = useSelector((state) => state.features.displayFeatures);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeatures());
  }, []);
  //

  const classes = useStyle();

  return (
    <div style={{ marginBottom: "6em" }}>
      <h1 className={classes.feature}>Feature Products</h1>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: 5,
          margin: "auto",
        }}
      >
        {features.map((feature) => (
          <FeatureCard item xs={4} feature={feature} />
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedProduct;
