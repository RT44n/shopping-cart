import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import getItemsData from "./getItemsFromAPI";
import { Link } from "react-router-dom";

const ShoppingPage = () => {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <nav>
        <Link to="/HomePage">Home</Link>
      </nav>
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingPage;
