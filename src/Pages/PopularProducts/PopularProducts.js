import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchPopularProducts } from "../../RTK/Slice/popularProductsSlice";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        marginRight: "25px",
        padding: "20px 2px",
      }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        marginLeft: "25px",
        zIndex: "3",
        padding: "20px 2px",
      }}
      onClick={onClick}
    />
  );
}

const PopularProducts = () => {
  const popularProducts = useSelector(
    (state) => state.populars.displayPopularProduct
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    slidesPerRow: 2,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  // console.log(popularProducts[0].img, "yes");
  return (
    <Slider {...settings} style={{ maxWidth: "90%", margin: "auto" }}>
      {popularProducts.map((p) => (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: '2px solid black',
            
          }}
        >
          <Box>
            <img style={{maxWidth: '100%'}} src={p.img} alt="" />
          </Box>
          <Box >
            <Typography variant="h4">{p.title}</Typography>
            <Typography variant="h6">${p.price}</Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default PopularProducts;
