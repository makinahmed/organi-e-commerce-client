import "./App.css";
import Banner from "./Components/Banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import { Provider } from "react-redux";
import { store } from "./RTK/Store/Store";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct";
// import FeatureCard from "./Components/FeaturedProduct/FeatureCard";
import FeatureNav from "./Components/FeaturedProduct/FeatureNav";
import All from "./Components/FeaturedProduct/FoodsCategory/All";
import FeatureBanner from "./Components/FeatureBanner/FeatureBanner";
// import FeatureCard from "./Components/FeaturedProduct/FeatureCard";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import RangeSlider from "./Components/RangeSlider/RangeSlider";
import FeatureCard from "./Components/FeaturedProduct/FeatureCard";
import SideNav from "./Components/SideNav/SideNav";
import { AppBar } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactBanner from "./Components/Contact/ContactBanner";
import ContactMedium from "./Components/Contact/ContactMedium";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<ContactMedium />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <NavBar />
        <Banner />
        <ProductSlider />
        <FeatureNav />
        <FeaturedProduct />
        <FeatureBanner />
        <PopularProducts />
        <Blog />
        <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;
