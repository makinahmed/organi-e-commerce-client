import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, display } from "@mui/system";
import { makeStyles } from "@mui/styles";
import "./FeatureCard.css";
import { Button, CardActions } from "@mui/material";
const useStyles = makeStyles({
  cardTitle: {
    fontSize: "25px",
    color: "black",
    opacity: "1",
    color: "white",
  },
  cardPrice: {
    fontWeight: 900,
    fontSize: "25px",
    color: "white",
  },
  cardBtn: {
    margin: "auto",
    color: "white",
    fontSize: "20px",
    border: "3px solid #fef3d5",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    fontWeight: "500",
  },
  productPrice: {
    fontSize: "50px",
    color: "#fef3d5",
    fontWeight: "700",
  },
});

const FeatureCard = (props) => {
  const classes = useStyles();
  const { title, price, img } = props.feature;

  return (
    <div className="cardContainer">
      <Card sx={{ minWidth: 250, Height: "100%", overflow: "hidden" }}>
        <CardMedia
          sx={{ minHeight: 300, maxHeight: 300, maxWidth: 250 }}
          component="img"
          alt="green iguana"
          image={img}
        />
        <div className="cardContent">
          <CardContent>
            <div className="text">
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
              <CardActions>
                <div className={classes.cardBtn}>-</div>
                <div className={classes.productPrice}>5</div>
                <div className={classes.cardBtn}>+</div>
              </CardActions>
              <div>Details</div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCard;

//  <div className="icon">
//    <Box className={classes.cardIcon}>
//      <Typography sx={{ display: "inline", padding: 1 }}>
//        <AddShoppingCartIcon className={classes.icons} />
//      </Typography>
//      <Typography sx={{ display: "inline", padding: 1 }}>
//        <TransformIcon className={classes.icons} />
//      </Typography>
//      <Typography sx={{ display: "inline", padding: 1 }}>
//        <GradeIcon className={classes.icons} />
//      </Typography>
//    </Box>
//  </div>;
