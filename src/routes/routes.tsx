import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

function MainRoutes(){
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<ProtectedRoute path="/checkout" element={<Checkout />} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    )
}

export default MainRoutes;