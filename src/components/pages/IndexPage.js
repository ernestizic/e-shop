import React from 'react';
import CartContextProvider from '../contexts/CartContext';
import ProductContextProvider from '../contexts/ProductContext';
import ProductGrid from "../products/ProductGrid"
import ShoppingCart from './ShoppingCart';

const IndexPage = () => {
    return (
        <div>
            <ProductContextProvider>
                <CartContextProvider>
                    <ShoppingCart />
                    <ProductGrid />
                </CartContextProvider>
            </ProductContextProvider> 
        </div>
     );
}
 
export default IndexPage;