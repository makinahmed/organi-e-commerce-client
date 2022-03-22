import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import { store } from "./RTK/Store/Store";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";
import Shop from "./Components/Shop/Shop";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
