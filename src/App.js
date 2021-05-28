
import Navbar from "./components/ui/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import ShoppingCart from "./components/pages/ShoppingCart";
import ProductContextProvider from './components/contexts/ProductContext';
import CartContextProvider from "./components/contexts/CartContext";
import ProductDetail from './components/products/ProductDetail';
import NotFound from "./components/pages/NotFound";
import Contact from './components/pages/Contact'
import CheckOutPage from "./components/pages/CheckOutPage";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
                <Navbar />
                  <div className="content-wrap">
                    <Switch>
                      <Route exact path="/" component={IndexPage} />
                      <Route path="/cart" component={ShoppingCart} />
                      <Route path="/contact" component={Contact} />
                      <Route path='/checkout' component={CheckOutPage}/>
                      <Route path="/products/:product_id" component={ProductDetail} />
                      <Route path="*" component={NotFound}/>
                    </Switch>
                  </div>
          </div>
        </BrowserRouter>    
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
