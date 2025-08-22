import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, checkout, removeFromCart } = useContext(CartContext);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b pb-2">
        My Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600 bg-gray-50 py-10 rounded-lg shadow-sm">
          <p className="text-lg">No items in cart 🛒</p>
          <p className="text-sm mt-2">Add some products to checkout.</p>
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
              >
                {/* Thumbnail + Details */}
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">ID: {item.id}</p>
                    <p className="text-green-600 font-bold">₹{item.price}</p>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Checkout Button */}
          <div className="mt-6 text-right">
            <button
              onClick={checkout}
              className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
