import React from "react";
import Slider from "react-slick";
import img from "../../images/cat-1.jpg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        padding: "50px 7px",
        marginRight: "55px",
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
        background: "gray",
        padding: "50px 7px",
        marginLeft:'25px',
        zIndex:'2'
      }}
      onClick={onClick}
    />
  );
}
const ProductSlider = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
  };
  return (
    <Slider
      {...settings}
      style={{ width: "90%", margin: "auto", textAlign: "center" }}
    >
      <div style={{ minWidth: "90%" }}>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
      <div>
        <img style={{ minWidth: "90%" }} src={img} alt="" />
      </div>
    </Slider>
  );
};

export default ProductSlider;
