import React, { useContext } from 'react';
//import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import ProductItem from './ProductItem';

const ProductGrid = () => {
    const {products} = useContext(ProductContext);
    //const {cartItems} = useContext(CartContext)

    let grid = products.length ? (
        <div className="container">
            <h1 style={{padding: "12px"}}>Products</h1>
            <div className="row">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    ) : (
        <div> No products left </div>
    )
    return (
        <div>
            {grid}
        </div>
    );
}
 
export default ProductGrid;