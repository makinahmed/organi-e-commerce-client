import { Grid } from "@mui/material";
import { createTheme } from "@mui/system";
import React from "react";
import banner from "../../images/banner.jpg";
import SideNav from "../SideNav/SideNav";
const Banner = () => {
  const bannerStyle = createTheme({
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // flexGrow: "1",
    paddingLeft: "50px",
    // marginLeft: "50px",
    text: {
      h5: {
        color: "#7fad39",
        fontWeight: 700,
        letterSpacing: ".4em",
        fontSize: "1.4em",
         
      },
      h2: {
        fontWeight: 700,
        fontSize: "4.6em",
        lineHeight: "1em",
        margin: ".5em 0",
      },
      p: {
        fontSize: "1.6em",
        color: "#6f6f6f",
        fontWeight: 400,
        lineHeight: "1em",
        margin: "0 0 1.5em 0",
      },
      button: {
        display: "inlineBlock",
        fontSize: "1.4em",
        padding: ".5em 1em",
        color: "#fff",
        fontWeight: 700,
        background: "#7fad39",
        letterSpacing: ".2em",
        border: "none",
      },
    },
  });
  return (
    <Grid container style={{ textAlign: "left" }}>
      <Grid item md={2}>
        <SideNav />
      </Grid>

      <Grid item style={bannerStyle} md={10}>
        <h5 style={bannerStyle.text.h5}>FRUIT FRESH</h5>
        <h2 style={bannerStyle.text.h2}>Vegetable</h2>
        <h2 style={bannerStyle.text.h2}>100% Organic</h2>
        <p style={bannerStyle.text.p}>Free Pickup and Delivery Available</p>
        <button style={bannerStyle.text.button}>SHOP NOW</button>
      </Grid>
    </Grid>
  );
};

export default Banner;
