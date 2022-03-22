import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularProducts } from "../../RTK/Slice/popularProductsSlice";
import FeatureCard from "../FeaturedProduct/FeatureCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const PopularProducts = () => {
  const popularProducts = useSelector(
    (state) => state.populars.displayPopularProduct
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h1 style={{ fontSize: "5rem", margin: "1.5em auto" }}>
        Popular Products
      </h1>
      <Carousel responsive={responsive}>
        {popularProducts.map((p) => (
          <FeatureCard feature={p} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularProducts;
