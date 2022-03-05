import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../RTK/Slice/shopSlice";
import FeatureCard from "../FeaturedProduct/FeatureCard";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

// import ReactPaginate from "react-paginate";
import "./Paginate.css";
const useStyle = makeStyles({
  listItems: {
    listStyle: "none",
    textAlign: "left",
    margin: "10px auto",
    fontSize: 20,
    cursor: "pointer",
  },
});
const categoryList = [
  { name: "All", value: "All" },
  { name: "Fresh Meat", value: "Meat" },
  { name: "Vegetables", value: "Vegetables" },
  { name: "Fruits", value: "Fruits" },
  { name: "Sea Foods", value: "Sea Foods" },
  { name: "Eggs", value: "Eggs" },
  { name: "Dairy", value: "Dairy" },
  { name: "Nuts And Seeds", value: "Nuts And Seeds" },
  { name: "Ice Cream", value: "Dairy" },
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
  };

  const handleClick = (category) => {
    dispatch(fetchShop(category));
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3}>
          <ul>
            {categoryList.map((item) => (
              <li
                key={item._id}
                className={classes.listItems}
                onClick={() => handleClick(item.value)}
              >
                {item.name}
              </li>
            ))}
            <Box sx={{ width: 300 }}>
              <Slider
                max={500}
                min={0}
                style={{ color: "green" }}
                getAriaLabel={() => "range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <span
                style={{ color: "black", margin: "0 20px", fontWeight: 700 }}
              >
                Min: ${value[0]}
              </span>
              <span
                style={{ color: "black", margin: "0 20px", fontWeight: 700 }}
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
