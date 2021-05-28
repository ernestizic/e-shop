import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Rating from '../ui/Rating';
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';

const ProductDetail = () => {
    const {filtered, products} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);
    const {product_id} = useParams();

    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        setProductDetail(products.find(item => item.id == product_id))
    }, [])

    const prodetail = productDetail ? (
        <div className='container'>
            <Link to='/' class='btn btn-dark' style={{margin: '20px 0'}}>BACK TO PRODUCTS</Link>
            <div className='row'>
                <div className='col-lg-6'>
                    <img className="img-fluid" src={productDetail.img} style={{width: '100%'}}/>
                </div>
                <div className='col-lg-6' style={{padding: '20px'}}>
                    <p style={{fontSize: '40px', fontWeight: 'bold'}}>{productDetail.name}</p>
                    <Rating productRating={productDetail}/>
                    <h3>${productDetail.price}</h3>
                    <p>{productDetail.desc}</p>
                    <h6>Availability: <span style={{fontWeight: 'normal'}}>{productDetail.availability}</span></h6>
                    {/*<button className='btn-dark' onClick={()=> addToCart(productDetail) }>ADD TO CART</button>*/}

                    {
                        productDetail.availability === 'in stock' ? (
                            <button className='btn' onClick={()=> addToCart(productDetail)}>ADD TO CART</button>
                            ) : (
                                <button className='btn' disabled>Out of stock</button>
                            )
                    }
                </div>
            </div>
        </div>
    ) : (
        <div>
            <h1>Nothing to show here</h1>
        </div>
    )
    return ( 
        <div className='wrapper'>
            {prodetail}
        </div>
    );
}
 
export default ProductDetail;