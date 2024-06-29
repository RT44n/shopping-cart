import { Link, useOutletContext } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, removeFromCart, checkout } = useOutletContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length === 0 ? (
        <>
          <p className="text-4xl">Your cart is empty!</p>
          <p>
            Your Shopping Cart lives to serve. You can freely place and remove
            items, move them to Buy Later. Continue shopping on the -
            <Link className="text-blue-600" to="/ShoppingPage">
              shopping page.
            </Link>
          </p>
        </>
      ) : (
        <div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Cart Summary</h2>
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="border-b border-gray-200 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <span className="font-semibold">{item.id}</span> -
                    <span className="text-gray-700"> ${item.price}</span> -
                    <span className="text-gray-700">
                      {" "}
                      Quantity: {item.quantity}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-700">
                      Subtotal: ${item.price * item.quantity}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 mt-2 sm:mt-0"
                    >
                      <img
                        className="w-5"
                        src="./assets/close-button-svgrepo-com.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Total</h2>
            <p className="text-gray-700">Total Price: ${calculateTotal()}</p>
          </div>
          <button
            onClick={checkout}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full sm:w-auto"
          >
            Checkout!
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
