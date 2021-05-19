import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import {Link} from 'react-router-dom'
import Rating from '../ui/Rating';

const ProductItem = ({product}) => {
    const {addToCart} = useContext(CartContext);

    return ( 
        <div className="col-lg-3 col-sm-4 item-column"  title={product.name}>
            <Link to={`/products/${product.id}`}>
                <img className="img-fluid" src={product.img}/>
                <div className="middle">
                    <div className="view"><i className="fa fa-search"></i></div>
                </div>
                <p className="product-name" style={{marginBottom: '0'}}>{product.name}</p>
                <h6 style={{marginBottom: '0'}}>${product.price}</h6> 
                {
                    !product.old_price ? (<p style={{visibility: 'hidden'}}> null </p>) : (<p><small><del>${product.old_price}</del></small></p>)
                }
                
                <Rating productRating={product}/>
            </Link>

            {
                product.availability === 'in stock' ? (
                    <button id="add-to-cart-btn" onClick={()=> addToCart(product) }>ADD TO CART</button>
                    ) : (
                        <button id="add-to-cart-btn" disabled>Out of stock</button>
                    )
            }
        </div>
     );
}




export default ProductItem;