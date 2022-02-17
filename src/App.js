import "./App.css";
// import Banner from "./Pages/Banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./Pages/ProductSlider/ProductSlider";
import { Provider } from "react-redux";
import { store } from "./RTK/Store/Store";
import FeaturedProduct from "./Pages/FeaturedProduct/FeaturedProduct";
// import FeatureCard from "./Pages/FeaturedProduct/FeatureCard";
import FeatureNav from "./Pages/FeaturedProduct/FeatureNav";
// import All from "./Pages/FeaturedProduct/FoodsCategory/All";
import FeatureBanner from "./Pages/FeatureBanner/FeatureBanner";
import FeatureCard from "./Pages/FeaturedProduct/FeatureCard";
import PopularProducts from './Pages/PopularProducts/PopularProducts';
import Blog from "./Pages/Blog/Blog";
import Footer from "./Pages/Footer/Footer";
import Shop from "./Pages/Shop/Shop";
// import RangeSlider from "./Pages/RangeSlider/RangeSlider";
// import FeatureCard from "./Pages/FeaturedProduct/FeatureCard";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <SideNav /> */}
        {/* <Banner /> */}
        {/* <ProductSlider /> */}
        {/* <All /> */}
        <FeaturedProduct />

        <FeatureNav />
        <FeatureBanner />
        <PopularProducts />
        <Blog />
        <Shop />
       
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
