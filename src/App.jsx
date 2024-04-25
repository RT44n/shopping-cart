import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import getItemsData from "./components/getItemsFromAPI";

function App() {
  const [cart, setCart] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function updateCart(itemId, quantity, price) {
    const newCartItem = {
      id: itemId,
      price: price,
      quantity: quantity,
    };

    const existingItemIndex = cart.findIndex((item) => item.id === itemId);
    console.log(existingItemIndex);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, newCartItem]);
    }
    console.log(cart);
  }

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getItemsData();
      const updatedData = data.map((item) => ({
        ...item,
        status: false,
      }));
      setItemData(updatedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Item data:", error);
      setError(
        "Error fetching data. Please check your internet connection and try again."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <header className="bg-orange-600">
        <nav className="flex justify-between items-center px-4 py-2">
          <Link
            to="/"
            className="text-black hover:text-gray-200 transition duration-300 ml-4"
          >
            Home
          </Link>
          <Link
            to="/ShoppingPage"
            className="text-black hover:text-gray-200 transition duration-300"
          >
            Shop
          </Link>

          <Link
            to="/CheckoutPage"
            className="text-black flex items-center hover:text-gray-200 transition duration-300"
          >
            <img
              src="./src/assets/icons8-shopping-cart-50.png"
              alt=""
              className="ml-4 h-6 w-6"
            />
          </Link>
        </nav>
      </header>

      <Outlet
        context={{ cart, updateCart, itemData, loading, error, removeFromCart }}
      />
    </>
  );
}

export default App;
