
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/ShoppingPage"
      >Shopping Page</Link>
      <Link to= "/HomePage">Home</Link>
      <Link to= "/CheckoutPage">Checkout</Link>

    </div>
  );
}

export default App;