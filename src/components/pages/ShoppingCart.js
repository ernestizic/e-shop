import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Navbar from '../ui/Navbar';

const ShoppingCart = () => {
    //using context
    const {cartItems} = useContext(CartContext);
    const {addToCart, removeFromCart} = useContext(CartContext);

    //variables
    //acc = accumulator and curr = currentItem
    const itemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return ( 
        <div>
            <Navbar />
            <h4> Cart Items </h4>
            {cartItems.length === 0 ? (
                <div>Cart is empty</div>
            ) : (
                <div className="container">
                    {cartItems.map(item => (
                        <div key={item.id} className="row">
                            <img className="img-fluid" src={item.img}/>
                            <div>{item.name}</div>
                            <div>
                                <button onClick={()=> addToCart(item) } className="btn btn-primary">+</button>
                                <button onClick={()=> removeFromCart(item) } className="btn btn-danger">-</button>
                            </div>
                            <div>
                                {item.qty} x ${item.price}
                            </div>
                        </div>
                    ))}
                </div>
            )  }

            {cartItems.length !== 0 && (
                <div>
                    <hr />
                    <p>Items Price: ${itemsPrice.toFixed(2)}</p>

                    <p>Tax Price: ${taxPrice.toFixed(2)}</p>

                    <p>Shipping Price: ${shippingPrice.toFixed(2)}</p>

                    <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>

                </div>
                
            )}
        </div>
     );
}
 
export default ShoppingCart;