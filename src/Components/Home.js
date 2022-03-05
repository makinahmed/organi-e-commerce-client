import React from "react";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import FeatureBanner from "./FeatureBanner/FeatureBanner";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import FeatureNav from "./FeaturedProduct/FeatureNav";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import PopularProducts from "./PopularProducts/PopularProducts";
import ProductSlider from "./ProductSlider/ProductSlider";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductSlider />
      <FeatureNav />
      <FeaturedProduct />
      <FeatureBanner />
      <PopularProducts />
      <Blog />
    </div>
  );
};

export default Home;
