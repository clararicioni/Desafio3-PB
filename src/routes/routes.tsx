import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import SingleProduct from "../pages/SingleProduct";
import Contact from "../pages/Contact";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Register from "../pages/Register"

function MainRoutes(){
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/singleproduct/:productName" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<ProtectedRoute element={<Checkout />} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    )
}

export default MainRoutes;
