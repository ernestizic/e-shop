import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import {Link} from 'react-router-dom'

const ProductItem = ({product}) => {
    const {addToCart} = useContext(CartContext);

    return ( 
        <div className="col-lg-3 col-sm-4 item-column"  title={product.name}>
            <img className="img-fluid" src={product.img}/>
            <div className="middle">
                <Link to={`/product/${product.id}`}><div className="view"><i className="fa fa-search"></i></div></Link>
            </div>
            <h6 className="product-name">{product.name}</h6>
            <p>${product.price}</p> 
            <button id="add-to-cart-btn" onClick={()=> addToCart(product) }>ADD TO CART</button>
        </div>
     );
}




export default ProductItem;