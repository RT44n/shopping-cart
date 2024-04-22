import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/ShoppingPage">Shop</Link>
          </li>
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
          <li>
            <Link to="/CheckoutPage"></Link>
            <img src="./src/assets/icons8-shopping-cart-50.png" alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
