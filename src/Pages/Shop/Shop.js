import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../RTK/Slice/shopSlice";
import FeatureCard from "../FeaturedProduct/FeatureCard";
// import RangeSlider from "../RangeSlider/RangeSlider";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
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
const Shop = () => {
  const [value, setValue] = useState([0, 500]);
  const classes = useStyle();
  const shops = useSelector((state) => state.shops.displayShop);
  const [categories, setCategories] = useState(shops);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShop());
  }, []);
  let onclickHandler = (category) => {
    const selectedProducts = categories.filter(
      (item) =>
        item.category.toLowerCase() === category.toLowerCase() &&
        item.price > value[0] &&
        item.price < value[1]
    );
    selectedProducts.length === 0
      ? setCategories(shops)
      : setCategories(selectedProducts);
      
  };
  useEffect(() => {
    //  console.log(shops, 'i am shops');
    // console.log(typeof value[0]);
    const filtered = categories.filter((item) => item.price > value[0] && item.price < value[1]);
    setCategories(filtered)
    console.log(filtered);
      // const handleAll = () => {};
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={3}>
          <ul>
            {/* <li onClick={handleAll}>All</li> */}
            {categoryList.map((item) => (
              <li
                key={item.name}
                onClick={() =>
                  onclickHandler(`${item.value.toLocaleLowerCase()}`)
                }
                className={classes.listItems}
              >
                {item.name}
              </li>
            ))}
            <Box sx={{ width: 300 }}>
              <Slider
                max={500}
                min={0}
                style={{ color: "green" }}
                getAriaLabel={() => "Temperature range"}
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
          {categories?.map((category) => (
            <FeatureCard feature={category} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Shop;
