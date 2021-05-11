import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {product_id} = useParams();
    console.log(product_id)
    const [productDetail, setProductDetail] = useState(null)
    useEffect(() => {
        setProductDetail(product_id)
    }, [])

    const prod = productDetail ? (
        <div>{product_id.name}</div>
    ) : (
        <div>Loading...</div>
    )
    return ( 
        <div>
            <p>Product detail</p>
            {prod}
        </div>
     );
}
 
export default ProductDetail;