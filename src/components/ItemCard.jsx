import PropTypes from "prop-types";
import "../src/styles/itemCard.css";

const ItemCard = ({ itemName, itemImage }) => {
  return (
    <div className="item-card">
      <img src={itemImage} alt={itemName} />
      <p>{itemName}</p>
      <input type="number" />
      <button>Add to Cart</button>
    </div>
  );
};

ItemCard.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemImage: PropTypes.string.isRequired,
};

export default ItemCard;
