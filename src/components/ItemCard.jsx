import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/itemCard.css";

const ItemCard = ({ itemName, itemImage, itemPrice, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity <= 0) {
      alert("quantity is zero");
      return;
    }
    addToCart(itemName, quantity, itemPrice);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity < 0) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div>
        <img
          className="w-full h-auto mb-4 max-w-52 max-h-52"
          src={itemImage}
          alt={itemName}
        />
        <p className="text-gray-950 text-lg font-bold mb-2">{itemName}</p>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="text-gray-950 text-3xl mb-2"> ${itemPrice}</p>
        <label htmlFor="itemQuantity" className="block text-gray-700"></label>
        <input
          id="itemQuantity"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-2 w-full"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
        <div className="flex justify-center">
          <button
            onClick={handleAddToCart}
            className="bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ItemCard;
