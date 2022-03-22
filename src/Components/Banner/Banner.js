import { Grid } from "@mui/material";
import { createTheme } from "@mui/system";
import React from "react";
import banner from "../../images/banner.jpg";
// import SideNav from "../SideNav/SideNav";
const Banner = () => {
  const bannerStyle = createTheme({
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    paddingBottom: "2em",
    objectFit: "cover",
    height: "calc(100% - '5px')",
    paddingLeft: "50px",
    text: {
      h5: {
        color: "#7fad39",
        fontWeight: 700,
        letterSpacing: ".4em",
        fontSize: "clamp(1vw, 15vw, 2vw)",
      },
      h2: {
        fontWeight: 700,
        fontSize: "clamp(3vw, 15vw, 5vw)",
        margin: ".5em 0",
        height: "calc(100% - '5px')",
      },
      p: {
        fontSize: "clamp(1vw, 5vw, 2vw)",
        color: "#6f6f6f",
        fontWeight: 400,
        margin: "0 0 1.5em 0",
      },
      button: {
        display: "inlineBlock",
        fontSize: "clamp(1vw, 15vw, 2.4vw)",
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
    <Grid
      container
      style={{ textAlign: "left", paddingBottom: "5em", }}
    >
      <Grid item style={bannerStyle} xs={12}>
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
