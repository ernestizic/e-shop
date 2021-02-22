import ProductContextProvider from "./components/contexts/ProductContext";
import Navbar from "./components/ui/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import ShoppingCart from "./components/pages/ShoppingCart";
import CartContextProvider from "./components/contexts/CartContext";

function App() {
  return (
    <Router>
      <div className="App">

        <CartContextProvider>
          <Navbar />
        </CartContextProvider>

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <CartContextProvider>
            <Route path="/cart" component={ShoppingCart} />
          </CartContextProvider>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
