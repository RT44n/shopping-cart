import { render } from "@testing-library/react";
import ShoppingPage from "../src/components/ShoppingPage";
import { vi } from "vitest";

test("renders loading state", async () => {
  const useOutletContextMock = vi.fn().mockReturnValue({
    loading: true,
    error: null,
    itemData: [],
    updateCart: vi.fn(),
  });

  const { getByText } = render(<ShoppingPage />, {
    wrapper: ({ children }) => <div>{children}</div>,
  });

  expect(getByText("Loading...")).toBeInTheDocument();
});

test("renders error state", async () => {
  const useOutletContextMock = vi.fn().mockReturnValue({
    loading: false,
    error: "Failed to load data",
    itemData: [],
    updateCart: vi.fn(),
  });

  const { getByText } = render(<ShoppingPage />, {
    wrapper: ({ children }) => <div>{children}</div>,
  });

  expect(getByText("Failed to load data")).toBeInTheDocument();
});

test("renders no items available message", async () => {
  const useOutletContextMock = vi.fn().mockReturnValue({
    loading: false,
    error: null,
    itemData: [],
    updateCart: vi.fn(),
  });

  const { getByText } = render(<ShoppingPage />, {
    wrapper: ({ children }) => <div>{children}</div>,
  });

  expect(getByText("No items available")).toBeInTheDocument();
});

test("renders item cards", async () => {
  const itemData = [
    { name: "Item 1", image: "item1.jpg", price: 10 },
    { name: "Item 2", image: "item2.jpg", price: 15 },
  ];

  const useOutletContextMock = vi.fn().mockReturnValue({
    loading: false,
    error: null,
    itemData,
    updateCart: vi.fn(),
  });

  const { getByText, getAllByTestId } = render(<ShoppingPage />, {
    wrapper: ({ children }) => <div>{children}</div>,
  });

  expect(getByText("Item 1")).toBeInTheDocument();
  expect(getByText("Item 2")).toBeInTheDocument();
  expect(getAllByTestId("item-card")).toHaveLength(2); // Assuming you set a test id for the ItemCard component
});
