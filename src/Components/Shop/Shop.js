import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../RTK/Slice/shopSlice";
import FeatureCard from "../FeaturedProduct/FeatureCard";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./Paginate.css";
import ContactBanner from "../Contact/ContactBanner";

const useStyle = makeStyles({
  listItems: {
    listStyle: "none",
    textAlign: "left",
    margin: "10px auto",
    fontSize: 20,
    cursor: "pointer",
  },
  slider: {
    "& .MuiSlider-thumb": {
      overflow: "hidden",
    },
  },
});
const categoryList = [
  { name: "All", value: "All" },
  { name: "Fresh Meat", value: "Meat" },
  { name: "Vegetables", value: "Vegetables" },
  { name: "Fruits", value: "Fruits" },
  { name: "Sea Foods", value: "Sea Foods" },
  { name: "Eggs", value: "Eggs" },
  { name: "Dairy Foods", value: "Dairy" },
  { name: "Nuts And Seeds", value: "Nuts and seeds" },
  { name: "Others", value: "Others" },
];
function valuetext(value) {
  return `$${value}`;
}
const Shop = ({ itemsPerPage }) => {
  const [value, setValue] = useState([0, 500]);
  const classes = useStyle();
  let shops = useSelector((state) => state?.shops?.displayShop);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShop());
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue); 
    // dispatch(fetchShop("Others", value[0], value[1]));
  };

  const handleClick = (category,min,max) => {
    dispatch(fetchShop(category, min, max));
  };
  return (
    <>
      <ContactBanner title="Organi Shop" />
      <Grid container>
        <Grid item xs={12} md={3}>
          <ul>
            {categoryList.map((item) => (
              <li
                key={item._id}
                className={classes.listItems}
                onClick={() => handleClick(item.value,value[0],value[1])}
              >
                {item.name}
              </li>
            ))}
            <Box  >
              <Slider
                max={500}
                min={0}
                style={{ color: "green", overflow: "hidden" }}
                getAriaLabel={() => "range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className={classes.slider}
              />
              <span
                style={{ color: "black", margin: "0 20px", fontWeight: 500 }}
              >
                Min: ${value[0]}
              </span>
              <span
                style={{ color: "black", margin: "0 20px", fontWeight: 500 }}
              >
                Max: ${value[1]}
              </span>
            </Box>
          </ul>
        </Grid>
        <Grid
          xs={12}
          md={9}
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            margin: "auto",
          }}
        >
          {shops?.map((category) => (
            <FeatureCard key={category._id} feature={category} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
