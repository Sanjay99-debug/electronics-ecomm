import React from "react";
import HeroImage from "../assets/MyBanner.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-orange-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Electronics <span className="text-blue-600">E-Commerce</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover the latest gadgets and electronics at unbeatable prices.
            Shop laptops, smartphones, wearables, and more with amazing offers.
          </p>
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={HeroImage}
            alt="Electronics"
            className="w-3/4 md:w-full drop-shadow-xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
