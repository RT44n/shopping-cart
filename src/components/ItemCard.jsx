import PropTypes from "prop-types";
import "../styles/itemCard.css";

const ItemCard = ({ itemName, itemImage, itemPrice, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(itemName);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div>
        <img
          className="w-full h-auto mb-4 max-w-52 max-h-52"
          src={itemImage}
          alt={itemName}
        />
        <p className="text-sky-400 text-lg font-bold mb-2">{itemName}</p>
      </div>
      <div>
        <p className="text-gray-700 mb-2">Price: ${itemPrice}</p>
        <label htmlFor="itemQuantity" className="block text-gray-700"></label>
        <input
          id="itemQuantity"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 mb-2 w-full"
          type="number"
          placeholder="Quantity"
        />
        <div className="flex justify-center">
          <button
            onClick={handleAddToCart} // Use handleAddToCart function
            className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600"
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
