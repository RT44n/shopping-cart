import { render } from "@testing-library/react";
import ItemCard from "../src/components/ItemCard";
import { describe, expect, vi } from "vitest";
import { fireEvent } from "@testing-library/react";

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
    const consoleErrorSpy = vi.spyOn(console, "error");

    render(<ItemCard itemImage={itemImage} />);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy.mock.calls[0][2]).toContain(
      "The prop `itemName` is marked as required in `ItemCard`, but its value is `undefined`"
    );
    consoleErrorSpy.mockRestore();
  });

  test("throws error with missing itemImage prop", () => {
    const itemName = "Test Item";
    // Spy on console.error
    const consoleErrorSpy = vi.spyOn(console, "error");

    // Render ItemCard without itemImage prop
    render(<ItemCard itemName={itemName} />);

    // Check if console.error was called with the expected message

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy.mock.calls[0][2]).toContain(
      "The prop `itemImage` is marked as required"
    );

    // Restore the original console.error after the test
    consoleErrorSpy.mockRestore();
  });

  test("throws error with missing itemName prop", () => {
    const itemImage = "test.jpg";
    const consoleErrorSpy = vi.spyOn(console, "error");

    render(<ItemCard itemImage={itemImage} />);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy.mock.calls[0][2]).toContain(
      "The prop `itemName` is marked as required"
    );
    consoleErrorSpy.mockRestore();
  });

  test("throws error when itemPrice prop is missing or undefined", () => {
    const itemName = "Test Item";
    const itemImage = "test.jpg";
    const consoleErrorSpy = vi.spyOn(console, "error");

    render(<ItemCard itemName={itemName} itemImage={itemImage} />);

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy.mock.calls[0][2]).toContain(
      "The prop `itemPrice` is marked as required"
    );

    consoleErrorSpy.mockRestore();
  });

  test("displays correct quantity when input is changed", () => {
    const itemName = "Test Item";
    const itemImage = "test.jpg";
    const { getByLabelText } = render(
      <ItemCard itemName={itemName} itemImage={itemImage} />
    );

    const quantityInput = getByLabelText("Quantity:");
    fireEvent.change(quantityInput, { target: { value: "5" } });

    expect(quantityInput.value).toBe("5");
  });

  test("adds item to cart with positive quantity", () => {
    const itemName = "Test Item";
    const itemImage = "test.jpg";
    const itemPrice = 10;
    const addToCartMock = vi.fn();
    const { getByText, getByLabelText } = render(
      <ItemCard
        itemName={itemName}
        itemImage={itemImage}
        itemPrice={itemPrice}
        addToCart={addToCartMock}
      />
    );

    const quantityInput = getByLabelText("Quantity:");
    fireEvent.change(quantityInput, { target: { value: "3" } });

    const addToCartButton = getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    expect(addToCartMock).toHaveBeenCalledWith(itemName, 3, itemPrice);
  });
});
