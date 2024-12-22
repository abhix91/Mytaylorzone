import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./pages/Login";
import Product from "./Components/Product/Product";
import Home from "./pages/Home";
import womenBanner from "./Components/Assets/images/women_banner.png";
import menBanner from "./Components/Assets/images/men_banner.png";
import kidsBanner from "./Components/Assets/images/kids_banner.png";
import shopBanner from "./Components/Assets/images/shop_banner.png";
import WishList from "./Components/WishList/WishList";
import Compare from "./Components/Compare/Compare";
import Shop2 from "./Components/Shop2/Shop2";
import Search from "./Components/Search/Search";
import About from "./Components/About/About";
import Error404 from "./Components/Error404/Error404";
import Contact from "./Components/Contact/Contact";
import { useShopContext } from "./Context/ShopContext";

function App() {
  const {navHeight} = useShopContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{paddingTop: navHeight}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop2 category = "Shop" img = {shopBanner} />}  />
            <Route path="/men" element={<Shop2 category = "Men" img = {menBanner}/>} />
            <Route path="/women" element={<Shop2 category = "Women" img = {womenBanner}/>} />
            <Route path="/kids" element={<Shop2 category = "Kids" img = {kidsBanner} />} />
            <Route path="/product" element={<Product />} >
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
