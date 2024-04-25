const getItemsData = async () => {
  let itemArray = [];
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    });
    const itemData = await response.json();
    for (let i = 0; i < itemData.length; i++)
      itemArray.push({
        name: itemData[i].title,

        price: itemData[i].price,

        image: itemData[i].image,

        rating: itemData[i].rating,

        quantity: 0,
      });
    return itemArray;
  } catch (error) {
    console.error("Error fetching Item data:", error);
    throw error;
  }
};

export default getItemsData;
