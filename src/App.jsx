import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import getItemsData from "./components/getItemsFromAPI";
import "./styles/app.css";

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

  const checkout = () => {
    alert(
      "Your orders have been placed. You will not recieve your items. Thank you for shopping with us!"
    );
    setCart([]);
  };

  return (
    <div className="home">
      <header className=" header flex justify-between items-center">
        <div className="flex items-center logo">
          <h1 className="text-3xl font-bold text-black ml-2">RT44nKart</h1>
        </div>
        <nav>
          <ul className="flex justify-between items-center flex-row px-4 py-2 nav">
            <li className="px-16 py-16">
              <Link
                to="/"
                className="text-black hover:text-gray-200 transition duration-300 ml-4"
              >
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/ShoppingPage"
                className="text-black hover:text-gray-200 transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li className="px-4">
              <Link
                to="/CheckoutPage"
                className="text-black flex items-center text-3xl"
              >
                <img
                  src="./src/assets/icons8-shopping-cart-50.png"
                  alt=""
                  className="ml-4 h-6 w-6"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet
        context={{
          cart,
          updateCart,
          itemData,
          loading,
          error,
          removeFromCart,
          checkout,
        }}
      />
    </div>
  );
}

export default App;
