import React from "react";
import { render } from "@testing-library/react";
import ItemCard from "./ItemCard";

describe("ItemCard", () => {
  test("renders correctly with valid props", () => {
    const itemName = "Test Item";
    const itemImage = "test.jpg";
    const { getByText, getByAltText } = render(
      <ItemCard itemName={itemName} itemImage={itemImage} />
    );

    expect(getByText(itemName)).toBeInTheDocument();
    expect(getByAltText(itemName)).toBeInTheDocument();
    expect(getByAltText(itemName)).toHaveAttribute("src", itemImage);
  });

  test("throws error with missing itemName prop", () => {
    const itemImage = "test.jpg";

    expect(() => {
      render(<ItemCard itemImage={itemImage} />);
    }).toThrowError(
      "Failed prop type: The prop `itemName` is marked as required"
    );
  });

  test("throws error with missing itemImage prop", () => {
    const itemName = "Test Item";

    expect(() => {
      render(<ItemCard itemName={itemName} />);
    }).toThrowError(
      "Failed prop type: The prop `itemImage` is marked as required"
    );
  });
});
