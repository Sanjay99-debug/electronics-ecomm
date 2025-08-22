// context/CartContext.js
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);

  // Load saved cart + history from localStorage on page load
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const savedHistory = JSON.parse(localStorage.getItem("history")) || [];
    setCart(savedCart);
    setHistory(savedHistory);
  }, []);

  // Save cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save history changes to localStorage
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function checkout() {
    setHistory([...history, ...cart]);
    setCart([]);
    localStorage.removeItem("cart"); // clear saved cart after checkout
  }

  function removeFromCart(productId) {
    setCart(cart.filter((item) => item.id !== productId));
  }

  function removeFromHistory(productId) {
    setHistory(history.filter((item) => item.id !== productId));
  }
  function clearHistory(){
    setHistory([]);
    localStorage.removeItem("history"); // clear saved history
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeFromHistory,
        checkout,
        clearHistory,
        history,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
