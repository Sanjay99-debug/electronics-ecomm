import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <>
      {/* Product Card */}
      <div
        className="p-6 mt-6 border rounded-lg shadow-md bg-white hover:shadow-xl hover:scale-105 transition transform duration-300 ease-in-out cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain rounded-md"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
        <p className="mt-2 text-md text-gray-600">${product.price}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-lg"
            >
              ✖
            </button>

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-contain rounded-md"
            />

            {/* Details */}
            <h2 className="mt-4 text-xl font-bold text-gray-800">
              {product.name}
            </h2>

            {/* Brand & Category */}
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            {/* Description */}
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Rating & Reviews */}
            <p className="mt-2 text-yellow-500">
              ⭐ {product.rating} ({product.numReviews} reviews)
            </p>

            {/* Price */}
            <p className="mt-2 text-lg font-semibold text-green-600">
              ${product.price}
            </p>

            {/* Stock */}
            <p
              className={`mt-1 text-sm font-medium ${
                product.countInStock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.countInStock > 0
                ? `${product.countInStock} in stock`
                : "Out of stock"}
            </p>

            {/* Warranty */}
            <p className="text-sm text-gray-500 mt-1">{product.warranty}</p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.countInStock === 0}
              className={`mt-4 w-full px-4 py-2 rounded text-white ${
                product.countInStock > 0
                  ? "bg-blue-600 hover:bg-green-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {product.countInStock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
