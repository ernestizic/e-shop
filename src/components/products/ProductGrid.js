import React, { useContext } from 'react';
//import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import ProductItem from './ProductItem';

const ProductGrid = () => {
    const {products, filtered} = useContext(ProductContext);
    //const {cartItems} = useContext(CartContext)

    let grid = filtered.length ? (
        <div>
            <p style={{padding: "12px"}}>{filtered.length} products found</p>
            <div className="row">
                {filtered.map(product => (
                    <ProductItem key={product.id} product={product}/>
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