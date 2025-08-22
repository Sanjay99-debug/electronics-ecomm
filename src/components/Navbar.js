import { Link } from "react-router-dom";
import { FaShoppingCart, FaStore, FaHistory, FaHome, FaBars } from "react-icons/fa";
import logo from "../assets/Logo3.png";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-20 rounded-full object-cover"
          />
          {/* <h2 className="text-xl font-bold hidden sm:block">ElectraMart</h2> */}
        </Link>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 items-center">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-yellow-300">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="flex items-center gap-1 hover:text-yellow-300">
              <FaStore /> Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative flex items-center gap-1 hover:text-yellow-300">
              <FaShoppingCart /> Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/history" className="flex items-center gap-1 hover:text-yellow-300">
              <FaHistory /> History
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-1 hover:text-yellow-300">
              <FaStore /> Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 sm:hidden">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-yellow-300">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="flex items-center gap-1 hover:text-yellow-300">
              <FaStore /> Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="relative flex items-center gap-1 hover:text-yellow-300">
              <FaShoppingCart /> Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/history" className="flex items-center gap-1 hover:text-yellow-300">
              <FaHistory /> History
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;