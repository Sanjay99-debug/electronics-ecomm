// pages/History.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function History() {
  const { history, removeFromHistory, clearHistory } = useContext(CartContext);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800 border-b pb-2">
          Purchase History
        </h2>

        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
          >
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="text-center text-gray-600 bg-gray-50 py-10 rounded-lg shadow-sm">
          <p className="text-lg">No purchases yet 🛒</p>
          <p className="text-sm mt-2">Your past orders will appear here.</p>
        </div>
      ) : (
        <ul className="space-y-4">
          {history.map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition"
            >
              {/* Product image + details */}
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
                  <p className="text-sm text-gray-500">Product ID: {item.id}</p>
                </div>
              </div>

              {/* Price + remove button */}
              <div className="text-right">
                <p className="text-xl font-bold text-green-600">₹{item.price}</p>
                <p className="text-xs text-gray-400 mb-2">Purchased</p>

                <button
                  onClick={() => removeFromHistory(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default History;
