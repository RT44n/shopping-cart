import { render, screen } from "@testing-library/react";
import ShoppingPage from "../src/components/ShoppingPage";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<ShoppingPage />);
    expect(screen.getByRole("heading").textContent).toMatch(/Shopping Page/i);
  });

  test('displays correct initial cart quantity', () => {
    const { getByTestId } = render(<ShoppingCart />);
    const totalPriceElement = getByTestId('cart-quantity');
    expect(totalPriceElement.textContent).toBe('0');
  });

  test('adds items to the cart and updates cart quantity', () => {
    const { getByTestId, getByText } = render(<ShoppingCart />);
    const addItemButton = getByText('Add Item');
    fireEvent.click(addItemButton);

    const totalPriceElement = getByTestId('cart-quantity');
    expect(totalPriceElement.textContent).toBe('1');
  });

  test('removes items from the cart and updates cart quantity', () => {
    const { getByTestId, getByText } = render(<ShoppingCart />);
    const addItemButton = getByText('Add Item');
    fireEvent.click(addItemButton);

    const removeItemButton = getByText('Remove');
    fireEvent.click(removeItemButton);

    const totalPriceElement = getByTestId('cart-quantity');
    expect(totalPriceElement.textContent).toBe('0');
  });




});

