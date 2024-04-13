import App from "./App";
import ShoppingPage from "./components/ShoppingPage";
import HomePage from "./components/HomePage";
import CheckoutPage from "./components/CheckoutPage";




const routes = [
  {
    path: "/",
    element: <App />,
    
  },
  {
    path: "/ShoppingPage",
    element: <ShoppingPage/>,
  },
  {
    path: "/CheckoutPage",
    element: <CheckoutPage/>,
  },
  {
    path: "/HomePage",
    element: <HomePage/>,
  },

];

export default routes;
