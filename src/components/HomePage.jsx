import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header className="bg-orange-600 flex flex-row">
        <nav className="flex flex-row items-center">
          <Link to="/ShoppingPage">Shopping Page</Link>

          <Link to="/CheckoutPage">
            <img src="./src/assets/icons8-shopping-cart-50.png" alt="" />
          </Link>
        </nav>
      </header>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
