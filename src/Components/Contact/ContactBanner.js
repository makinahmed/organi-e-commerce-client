import { Box } from "@mui/material";
import React from "react";
import breadcumb from "../../images/breadcrumb.jpg";
import "./contactBanner.css";
const ContactBanner = () => {
  return (
    <Box className="contact-banner">
      <img src={breadcumb} alt="" />
     <Box>
         <h1>Contact Us</h1>
     </Box>
    </Box>
  );
};

export default ContactBanner;
