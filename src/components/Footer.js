import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-10">
      <div className="container mx-auto  px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold">ElectraMart ⚡</h2>
          <p className="text-dark-400 text-sm mt-2">
            Your trusted electronics partner.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-blue-400 transition">Shop</Link>
            </li>
            <li>
              <Link to="/history" className="hover:text-blue-400 transition">History</Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-400 transition">Cart</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-dark-500 text-sm mt-8 border-t border-dark-700 pt-4">
        © {new Date().getFullYear()} ElectroShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
