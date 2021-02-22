import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
//import { ProductContext } from '../contexts/ProductContext';

const ProductItem = ({product}) => {
    //const {} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);

    return ( 
        <div className="col-md-3 column">
            <img className="img-fluid" src={product.img}/>
            <h6 className="product-name">{product.name}</h6>
            <p> <b>PRICE:</b> ${product.price}</p> 
            <button id="add-to-cart-btn" onClick={()=> addToCart(product) }>ADD TO CART</button>
        </div>
     );
}




export default ProductItem;