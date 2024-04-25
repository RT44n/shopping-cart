import { Link, useOutletContext } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useOutletContext();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length === 0 ? (
        <>
          <p className="text-4xl">Your cart is empty!</p>
          <p>
            Your Shopping Cart lives to serve. You can freey place and remove
            items, move them to Buy Later. Continue shopping on the
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
                <li key={item.id} className="border-b border-gray-200 py-2">
                  <span className="font-semibold">{item.id}</span> -
                  <span className="text-gray-700"> ${item.price}</span> -
                  <span className="text-gray-700">
                    Quantity: {item.quantity}
                  </span>
                  -
                  <span className="text-gray-700">
                    Subtotal: ${item.price * item.quantity}
                  </span>
                  <span>
                    <img
                      onClick={() => removeFromCart(item.id)}
                      className="w-5"
                      src="src/assets/close-button-svgrepo-com.svg"
                      alt=""
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Total</h2>
            <p className="text-gray-700">Total Price: ${calculateTotal()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
