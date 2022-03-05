import { Grid, Typography } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const ContactMedium = () => {
  return (
    <Grid container>
      <Grid item xs={6} md={3}>
        <CallIcon />
        <Typography variant="h2">Phone</Typography>
        <Typography variant="p">+01-3-8888-6868</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <LocationOnIcon />
        <Typography variant="h2">Address</Typography>
        <Typography variant="p">60-49 Road 11378 New York</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <AccessTimeIcon />
        <Typography variant="h2">Open time</Typography>
        <Typography variant="p">10:00 am to 23:00 pm</Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <MailOutlineIcon />
        <Typography variant="h2">Email</Typography>
        <Typography variant="p">hello@colorlib.com</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactMedium;
