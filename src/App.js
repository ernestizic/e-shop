import React from 'react';
import Navbar from "./components/ui/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import ShoppingCart from "./components/pages/ShoppingCart";
import ProductContextProvider from './components/contexts/ProductContext';
import CartContextProvider from "./components/contexts/CartContext";
import Features from "./components/pages/Features";
import ProductDetail from './components/products/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProductContextProvider>
        <CartContextProvider>
        <Navbar />
        
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/features" component={Features} />
          <Route path="/product/:product_id" component={ProductDetail} />
        </Switch>

      </CartContextProvider>
      </ProductContextProvider>
      </div>
    </BrowserRouter>    
  );
}

export default App;
