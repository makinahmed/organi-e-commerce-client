import { Box, Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  li: {
    listStyleType: "none",
  },
  a: {
    textDecoration: "none",
  },
  navStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "1.3em",
    padding: ".5em",
    margin: "auto",
  },
});
const FeatureNav = () => {
  const classes = useStyles();
  const allFeaturedProducts = useSelector((state) => state.features.displayFeatures);
  const freshMeat = allFeaturedProducts.filter(
    (a) => a.category.toLowerCase() === "fresh meat"
  );
  const vegetables = allFeaturedProducts.filter(
    (a) => a.category.toLowerCase() === "vegetable"
  );
  const fruits = allFeaturedProducts.filter(
    (a) => a.category.toLowerCase() === "fruits"
  );

  return (
    <div>
      <h3>Featured Product</h3>
      <Grid container>
        <Grid xs={4} md={2} className={classes.navStyle}>
          <li className={classes.li}>
            <a className={classes.a} href="/">
              All
            </a>
          </li>
        </Grid>
        <Grid xs={4} md={2} className={classes.navStyle}>
          <li className={classes.li}>
            <a className={classes.a} href="/">
              Fruits
            </a>
          </li>
        </Grid>
        <Grid xs={4} md={2} className={classes.navStyle}>
          <li className={classes.li}>
            <a className={classes.a} href="/">
              Vegetables
            </a>
          </li>
        </Grid>
        <Grid xs={4} md={2} className={classes.navStyle}>
          <li className={classes.li}>
            <a className={classes.a} href="/">
              Fast Foods
            </a>
          </li>
        </Grid>
        <Grid xs={4} md={2} className={classes.navStyle}>
          <li className={classes.li}>
            <a className={classes.a} href="/">
              Others
            </a>
          </li>
        </Grid>
      </Grid>
    </div>
  );
};

export default FeatureNav;
