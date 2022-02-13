import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import GradeIcon from "@mui/icons-material/Grade";
import TransformIcon from "@mui/icons-material/Transform";
import "./FeatureCard.css";
const useStyles = makeStyles({
  cardTitle: {
    fontSize: "15px",
    color: "black",
  },
  cardPrice: {
    fontWeight: 900,
    fontSize: "15px",
    color: "black",
  },
  cardIcon: {
    marginTop: "-50px",
  },
  cardContent: {
    marginTop: "20px",
  },
  icons: {
    fontSize: "25px",
  },
});
const FeatureCard = (props) => {
  const classes = useStyles();
  const { title, price, img } = props.feature;
  return (
    <div className="card">
      <Card sx={{ minWidth: 250 }}>
        <CardMedia
          sx={{ minHeight: 300 }}
          component="img"
          alt="green iguana"
          image={img}
        />
        <div className="icon">
          <Box className={classes.cardIcon}>
            <Typography sx={{ display: "inline", padding: 1 }}>
              <AddShoppingCartIcon className={classes.icons} />
            </Typography>
            <Typography sx={{ display: "inline", padding: 1 }}>
              <TransformIcon className={classes.icons} />
            </Typography>
            <Typography sx={{ display: "inline", padding: 1 }}>
              <GradeIcon className={classes.icons} />
            </Typography>
          </Box>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography
            variant="h4"
            className={classes.cardTitle}
            color="text.secondary"
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            className={classes.cardPrice}
            color="text.secondary"
          >
            ${price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureCard;
