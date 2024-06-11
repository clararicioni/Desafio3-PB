import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <div className="bg-white outline-none font-poppins">
      <div className="flex items-center justify-between p-4 font-medium">
        <div className="flex items-center space-x-0">
          <img src="logo.png" className="max-h-20 m-0" alt="Logo" />
          <div className="text-4xl font-bold m-0">Furniro</div>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-16">
          <Link to="/" className="hover:font-bold">Home</Link>
          <Link to="/shop" className="hover:font-bold">Shop</Link>
          <Link to="/about" className="hover:font-bold">About</Link>
          <Link to="/contact" className="hover:font-bold">Contact</Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 mr-12">
          <Link to="/" className="hover:font-bold">
            <img src="people-icon.svg" alt="Profile" />
          </Link>
          <Link to="/cart" className="hover:font-bold">
            <img src="cart-icon.svg" alt="Cart" />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:font-bold">Home</Link>
            <Link to="/shop" className="hover:font-bold">Shop</Link>
            <Link to="/about" className="hover:font-bold">About</Link>
            <Link to="/contact" className="hover:font-bold">Contact</Link>
            <div className="flex items-center space-x-4">
              <Link to="/" className="hover:font-bold">
                <img src="people-icon.svg" alt="Profile" />
              </Link>
              <Link to="/cart" className="hover:font-bold">
                <img src="cart-icon.svg" alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;
