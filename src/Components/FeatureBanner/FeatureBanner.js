import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";

const useStyle = makeStyles({
  bannerContainer: {
    justifyContent: "center",
    margin: "auto",
  },
  bannerImg: {
    maxWidth: "100%",
  },
});
const FeatureBanner = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.bannerContainer} spacing={2}>
      <Grid xs={10} sm={10} md={6} item>
        <img className={classes.bannerImg} src={banner1} alt="" />
      </Grid>
      <Grid xs={10} sm={10} item md={6}>
        <img className={classes.bannerImg} src={banner2} alt="" />
      </Grid>
    </Grid>
  );
};

export default FeatureBanner;
