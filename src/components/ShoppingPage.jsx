import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";

const ShoppingPage = () => {
  const { loading, error, itemData, updateCart } = useOutletContext();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Page</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : itemData.length === 0 ? (
        <div>No items available</div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {itemData.map((item) => (
            <ItemCard
              key={item.name}
              itemName={item.name}
              itemImage={item.image}
              itemPrice={item.price}
              addToCart={updateCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingPage;
