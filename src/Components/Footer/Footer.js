import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../images/logo.png";
import sponsor from "../../images/sponsor.jpg";

const useStyle = makeStyles({
  listItems: {
    listStyleType: "none",
    margin: "10px auto",
    textAlign: "left",
    fontSize: "1.5rem",
  },
  links: {
    textDecoration: "none",
    color: "black",
    fontSize: "1.5rem",
  },
  input: {
    outline: "none",
    padding: "10px",
    fontSize: "1.5rem",
  },
  button: {
    padding: "12px",
    backgroundColor: "#7fad39",
    border: "none",
    fontSize: "1.5rem",
  },
});
const Footer = () => {
  const classes = useStyle();
  return (
    <>
      <Grid container style={{ backgroundColor: "#F3F6FA", padding: "5em",marginTop: "5em" }}>
        <Grid item md={6} lg={4}>
          <Box>
            <img src={logo} alt="" />
          </Box>
          <Typography sx={{ fontSize: "1.5rem", lineHeight: 3 }}>
            Address: 60-49 Road 11378 New York <br />
            Phone: +65 11.188.888 <br />
            Email: hello@toyou.com
          </Typography>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 900, textAlign: "center" }}
          >
            Useful Link
          </Typography>
          <Typography>
            <ul sx={{ textAlign: "left" }}>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  About Us
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  About Our Shop
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Secure Shopping
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Delivery information
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Privacy Policy
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Our Sitemap
                </a>
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography>
            <ul>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Who We Are
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Our Services
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Projects
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Contact
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Innovation
                </a>
              </li>
              <li className={classes.listItems}>
                <a className={classes.links} href="/">
                  Testimonials
                </a>
              </li>
            </ul>
          </Typography>
        </Grid>
        <Grid item md={6} lg={4}>
          <Typography variant="h5" sx={{ fontWeight: 900, fontSize: "1.5rem" }}>
            Join Our Newsletter Now
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "1.5rem", margin: "15px auto" }}
          >
            Get E-mail updates about our latest shop and special offers.
          </Typography>
          <Box>
            <input
              className={classes.input}
              placeholder="Enter your mail"
              type="text"
            />
            <button className={classes.button}>SUBSCRIBE</button>
          </Box>
          <Box sx={{ marginTop: 2 }}>
            <FacebookIcon
              sx={{
                padding: 1,
                margin: 2,
                fontSize: "30px",
                backgroundColor: "white",
                color: "black",
              }}
            />
            <TwitterIcon
              sx={{
                padding: 1,
                margin: 2,
                fontSize: "30px",
                backgroundColor: "white",
                color: "black",
              }}
            />
            <InstagramIcon
              sx={{
                padding: 1,
                margin: 2,
                fontSize: "30px",
                backgroundColor: "white",
                color: "black",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <hr />
      <Grid container justifyContent="space-around">
        <Grid item>
          <Box xs={12} md={4}>
            <Typography variant="p" sx={{ color: "gray" }}>
              Copyright ©2022 All rights reserved
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box xs={12} md={4}>
            <img src={sponsor} alt="" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
