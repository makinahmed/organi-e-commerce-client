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
  const allFeaturedProducts = useSelector(
    (state) => state.features.displayFeatures
  );
  const freshMeat = allFeaturedProducts.filter(
    (a) => a.category.toLowerCase() === "fresh meat"
  );
  const vegetables = allFeaturedProducts.filter(
    (a) => a.category.toLowerCase() === "vegetable"
  );
  const fruits = allFeaturedProducts.filter(
    (a) => a.category.toLowerCase() === "fruits"
  );
  const links  = ["ALL", "FRUITS", "VEGETABLES", "FAST FOOD", "OTHERS"];
  // const links = [
  //   { name: "All", value: "" },
  //   { name: "Fresh Meat", value: "Meat" },
  //   { name: "Vegetables", value: "Vegetables" },
  //   { name: "Fruits", value: "Fruits" },
  //   { name: "Sea Foods", value: "Sea Foods" },
  //   { name: "Eggs", value: "Eggs" },
  //   { name: "Dairy Foods", value: "Dairy" },
  //   { name: "Nuts And Seeds", value: "Nuts and seeds" },
  //   { name: "Others", value: "Others" },
  // ];
  return (
    <div>
      <h3>Featured Product</h3>
      <Grid container>
        {links.map((link) => (
          <Grid xs={4} md={2} lg={2} className={classes.navStyle}>
            <li className={classes.li}>
              <a className={classes.a} href="/">
                {link}
              </a>
            </li>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeatureNav;



// <Grid xs={4} md={2} className={classes.navStyle}>
//           <li className={classes.li}>
//             <a className={classes.a} href="/">
//               Fruits
//             </a>
//           </li>
//         </Grid>
//         <Grid xs={4} md={2} className={classes.navStyle}>
//           <li className={classes.li}>
//             <a className={classes.a} href="/">
//               Vegetables
//             </a>
//           </li>
//         </Grid>
//         <Grid xs={4} md={2} className={classes.navStyle}>
//           <li className={classes.li}>
//             <a className={classes.a} href="/">
//               Fast Foods
//             </a>
//           </li>
//         </Grid>
//         <Grid xs={4} md={2} className={classes.navStyle}>
//           <li className={classes.li}>
//             <a className={classes.a} href="/">
//               Others
//             </a>
//           </li>
//         </Grid>