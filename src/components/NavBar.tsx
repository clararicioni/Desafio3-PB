import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleProfilePopup = () => {
    setProfilePopupOpen(!isProfilePopupOpen);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

  const handleLogout = async () => {
    await auth.signOut();
    window.location.href = "/login";
  };

  return (
    <>
      <div className="bg-white fixed top-0 left-0 right-0 z-50 font-poppins">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between font-medium">
          <div className="flex items-center space-x-0">
            <img src="/logo.png" className="max-h-20 m-0" alt="Logo" />
            <div className="text-4xl font-bold m-0">Furniro</div>
          </div>
          <div className="hidden md:flex items-center justify-center space-x-16">
            <Link to="/" className="hover:font-bold">
              Home
            </Link>
            <Link to="/shop" className="hover:font-bold">
              Shop
            </Link>
            <Link to="/about" className="hover:font-bold">
              About
            </Link>
            <Link to="/contact" className="hover:font-bold">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 mr-12">
            <button onClick={toggleProfilePopup} className="hover:font-bold">
              <img src="/people-icon.svg" alt="Profile" />
            </button>
            <button onClick={toggleCart} className="hover:font-bold">
              <img src="/cart-icon.svg" alt="Cart" />
            </button>
          </div>
          <div className="md:hidden flex items-center gap-5">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <button onClick={toggleCart} className="hover:font-bold">
              <img src="/cart-icon.svg" alt="Cart" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden p-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:font-bold">
                Home
              </Link>
              <Link to="/shop" className="hover:font-bold">
                Shop
              </Link>
              <Link to="/about" className="hover:font-bold">
                About
              </Link>
              <Link to="/contact" className="hover:font-bold">
                Contact
              </Link>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleProfilePopup}
                  className="hover:font-bold"
                >
                  <img src="/people-icon.svg" alt="Profile" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {isProfilePopupOpen && (
        <div className="fixed top-16 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
          Usuário:{" "}
          {auth.currentUser ? (
            <div className="font-bold">
              {auth.currentUser.displayName || auth.currentUser.email}
            </div>
          ) : (
            <div>N/A</div>
          )}
          <button
            className="bg-red-800 hover:opacity-75 p-2 mt-3 text-white font-bold rounded-md"
            onClick={handleLogout}
          >
            Deslogar
          </button>
        </div>
      )}
      {isCartOpen && <CartSidebar isOpen={isCartOpen} onClose={closeCart} />}
    </>
  );
};

export default Navbar;
