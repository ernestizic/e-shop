import React from 'react';
import Navbar from "./components/ui/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./components/pages/IndexPage";
import ShoppingCart from "./components/pages/ShoppingCart";
import CartContextProvider from "./components/contexts/CartContext";
import Features from "./components/pages/Features";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* 
        <CartContextProvider>
          <Navbar />
        </CartContextProvider>
        */}
        
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <CartContextProvider>
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/features" component={Features} />
          </CartContextProvider>
        </Switch>

      </div>
    </BrowserRouter>    
  );
}

export default App;
