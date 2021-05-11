import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import Navbar from '../ui/Navbar';

const ShoppingCart = () => {
    //using context
    const {cartItems, addToCart, removeFromCart, emptyCart} = useContext(CartContext);

    //variables
    //acc = accumulator and curr = currentItem
    const itemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return ( 
        <div className='wrapper'>

            {cartItems.length === 0 ? (
                <div style={{textAlign: "center", padding: 0}}>
                    <img src="img/cart.png" className="img-fluid" />
                    <h3>Your cart is empty</h3>
                </div>
            ) : (
                <div className="container">
                    {cartItems.map(item => (
                        <div key={item.id} className="table-responsive">
                              <table class="table">
                                    <thead style={{color: "grey"}}>
                                        <tr>
                                            <th>ITEM</th>
                                            <th></th>
                                            <th>QUANTITY</th>
                                            <th>UNIT PRICE</th>
                                            <th>SUBTOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="img-fluid cart-img" src={item.img}/>                                               
                                            </td>
                                            <td> <p> {item.name} </p></td>
                                            <td> 
                                                <div class="btn-group">
                                                    <button id="items-btn" type="button" onClick={()=> removeFromCart(item) } type="button">-</button>
                                                    <button id="qty-btn" type="button">{item.qty}</button>
                                                    <button id="items-btn" type="button" onClick={()=> addToCart(item)} type="button">+</button>
                                                </div>
                                            </td>
                                            <td><p> {item.price}</p></td>
                                            <td><p>{item.price * item.qty}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                    ))}
                </div>
            )  }


            {cartItems.length !== 0 && (
                <div className="container">
                    <button className="btn btn-danger" onClick={emptyCart}>Empty cart</button>
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