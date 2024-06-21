import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Quality from "../components/Quality";
import InitialSection from "../components/InitialSection";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { removeFromCart, updateQuantityInCart } from "../redux/cart/actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    const calculateSubtotal = () => {
      let total = 0;
      products.forEach((product) => {
        total += product.price * product.quantity;
      });
      setSubtotal(total);
    };

    calculateSubtotal();
  }, [products]);

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const increaseQty = (productId: number) => {
    const productToUpdate = products.find(
      (product) => product.id === productId
    );
    if (productToUpdate) {
      const updatedQuantity = productToUpdate.quantity + 1;
      dispatch(updateQuantityInCart(productId, updatedQuantity));
    }
  };

  const decreaseQty = (productId: number) => {
    const productToUpdate = products.find(
      (product) => product.id === productId
    );
    if (productToUpdate && productToUpdate.quantity > 1) {
      const updatedQuantity = productToUpdate.quantity - 1;
      dispatch(updateQuantityInCart(productId, updatedQuantity));
    }
  };

  return (
    <div className="font-poppins select-none">
      <Navbar />
      <InitialSection pageName="Cart" />
      <div className="flex flex-col md:flex-row md:space-x-4 m-4 p-4">
        <div className="md:w-2/3 overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-salmonCheckout">
              <tr>
                <th className="py-2 px-1">Product</th>
                <th className="py-2 px-1">Name</th>
                <th className="py-2 px-1">Price</th>
                <th className="py-2 px-1">Quantity</th>
                <th className="py-2 px-1">Subtotal</th>
                <th className="py-2 px-1">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-4">
                    Your cart is empty.
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="text-center border-b">
                    <td className="py-4 px-1">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 rounded-md mx-auto"
                      />
                    </td>
                    <td className="py-4 px-1">{product.name}</td>
                    <td className="py-4 px-1">Rs. {product.price}</td>
                    <td className="py-4 px-1">
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => decreaseQty(product.id)}
                          className="px-3 py-1 bg-white"
                        >
                          -
                        </button>
                        <input
                          id="quantity"
                          value={product.quantity}
                          type="number"
                          min="1"
                          readOnly
                          className="text-center w-12 px-2 py-1 bg-white outline-none"
                        />
                        <button
                          onClick={() => increaseQty(product.id)}
                          className="px-3 py-1 bg-white"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-1">
                      Rs. {product.price * product.quantity}
                    </td>
                    <td className="py-4 px-1">
                      <button onClick={() => handleRemoveProduct(product.id)}>
                        <img
                          src="/trash.png"
                          alt="delete product from cart"
                          className="w-6 h-6 mx-auto hover:scale-125 transition duration-100"
                        />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="md:w-1/4 bg-salmonCheckout p-4 md:sticky md:top-4 md:h-full">
          <h2 className="text-3xl font-semibold mb-10 text-center">
            Cart Totals
          </h2>
          <div className="flex justify-between">
            <span className="font-medium">Subtotal</span>
            <span className="text-grayText mb-5">Rs. {subtotal}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-medium">Total</span>
            <span className="mb-10 font-medium text-20px text-yellowPrimary">
              Rs. {subtotal}
            </span>
          </div>
          <div className="flex justify-center">
            <Link to="/checkout">
            <button className="border-2 border-black text-black rounded-lg p-3 w-48 hover:bg-black hover:text-white">
              Check Out
            </button>
            </Link>
          </div>
        </div>
      </div>
      <Quality />
      <Footer />
    </div>
  );
};

export default Cart;
