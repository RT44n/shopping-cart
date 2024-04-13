import { render, screen } from "@testing-library/react";
import ShoppingPage from "../src/components/ShoppingPage";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<ShoppingPage />);
    expect(screen.getByRole("heading").textContent).toMatch(/Shopping Page/i);
  });
});