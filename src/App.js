import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
// Added cart module for import
import Cart from "./components/cart/Cart";

// Added Shipping module for import
import Shipping from "./components/cart/Shipping";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
// Added MY ORDERS module for import
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetails from "./components/myOrders/OrderDetails";
import About from "./components/about/About";


import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/about.scss";


function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
          //           Route for CART added
        <Route path="/cart" element={<Cart />} />
          //           Route for SHIPPING added
        <Route path="/Shipping" element={<Shipping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
         //            Route for MY ORDERS added
        <Route path="/myOrders" element={<MyOrders />} />
        <Route path="/OrderDetails" element={<OrderDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
