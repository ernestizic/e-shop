import React from 'react';
import CartContextProvider from '../contexts/CartContext';
import ProductContextProvider from '../contexts/ProductContext';
import ProductGrid from "../products/ProductGrid"
import Navbar from '../ui/Navbar';
import ShoppingCart from './ShoppingCart';


const IndexPage = () => {
    return (
        <div>
            <ProductContextProvider>
                <CartContextProvider>
                    <Navbar />
                    <ProductGrid />
                </CartContextProvider>
            </ProductContextProvider> 
        </div>
     );
}
 
export default IndexPage;