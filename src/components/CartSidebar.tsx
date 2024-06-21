import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/root-reducer";
import { Product } from "../redux/cart/reducer";
import { removeFromCart } from "../redux/cart/actions";
import { Link } from "react-router-dom";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { products } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const sidebarRef = useRef<HTMLDivElement>(null);
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

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      {isOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-0 bottom-0 w-96 bg-white shadow-xl z-50 font-poppins overflow-y-auto select-none"
          style={{ maxHeight: "100vh" }}
        >
          <div className="fixed bg-white w-full p-10 border-b border-gray-200">
            <h2 className="font-semibold text-black text-2xl">Shopping Cart</h2>
          </div>
          <div className="p-4 pt-32 pb-28">
            {products.length === 0 ? (
              <section className="text-sm text-gray-600">
                Seu carrinho está vazio.
              </section>
            ) : (
              <div>
                {products.map((product: Product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-16 h-16 rounded-md text-1xl font-normal leading-6 text-black"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <div className="flex flex-row gap-5">
                        <section className="text-black font-medium">
                          {product.quantity}{"x "}
                        </section>
                        <section className="text-yellowPrimary font-medium">
                          Rs. {product.price}
                        </section>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveProduct(product.id)}>
                      <img
                        src="/deleteproductcart.png"
                        alt="delete product from cart"
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="fixed bottom-0 right-0 w-96 mx-auto p-4 bg-white border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-1xl font-normal text-black">Subtotal</span>
              <span className="text-yellowPrimary text-2xl font-semibold">
                Rs. {subtotal}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <Link to="/cart" className="w-full">
                <button className="w-full py-2 border-2 border-black text-12px text-black font-normal rounded-full hover:text-white hover:bg-black">
                  Cart
                </button>
              </Link>
              <Link to="/checkout" className="w-full">
                <button className="w-full py-2 border-2 border-black text-12px text-black font-normal rounded-full hover:text-white hover:bg-black">
                  Checkout
                </button>
              </Link>
              <button className="w-full py-2 border-2 border-black text-12px text-black font-normal rounded-full hover:text-white hover:bg-black">
                Comparison
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSidebar;
