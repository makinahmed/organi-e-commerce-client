import "./App.css";
// import Banner from "./Pages/Banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./Pages/ProductSlider/ProductSlider";
import { Provider } from "react-redux";
import { store } from "./RTK/Store/Store";
import FeaturedProduct from "./Pages/FeaturedProduct/FeaturedProduct";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
          {/* <SideNav /> */}
          {/* <Banner /> */}
          {/* <ProductSlider /> */}
          <FeaturedProduct/>
        
      </div>
    </Provider>
  );
}

export default App;
