import PropTypes from "prop-types";
import "../styles/itemCard.css";

const ItemCard = ({ itemName, itemImage }) => {
  return (
    <div className="itemCard">
      <img className="itemImage" src={itemImage} alt={itemName} />
      <p className="text-sky-400">{itemName}</p>
      <label htmlFor="itemQuantity">Quantity</label>
      <input className="bg-gray-100" type="number" />
      <button>Add to Cart</button>
    </div>
  );
};

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
};

export default ItemCard;
