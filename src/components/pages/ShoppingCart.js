import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
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
                <div className="empty-cart">
                    <img src="img/cart.png" className="img-fluid" />
                    <h3>Your cart is empty</h3>
                    <p style={{color: 'grey'}}>Start shopping to add items to your cart</p>
                    <Link to="/">Back to homepage</Link>
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
                                            <td> <p style={{overflow: 'hidden'}}> {item.name} </p></td>
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
                    <button className="btn" onClick={emptyCart}>Empty cart</button>
                    <Link to='/' className="btn" style={{float: 'right'}}>Continue Shopping</Link>
                    <hr />

                        <div className='totals'>
                            <p style={{fontWeight: 'bold'}}>Items Price: <span style={{float: 'right'}}>${itemsPrice.toFixed(2)}</span></p>

                            <p>Tax Price: <span style={{float: 'right'}}>${taxPrice.toFixed(2)}</span></p>

                            <p>Shipping Price: <span style={{float: 'right'}}>${shippingPrice.toFixed(2)}</span></p>
                            <hr/>
                            <p style={{fontSize: '30px'}}>Total Price:<span style={{float: 'right'}}>${totalPrice.toFixed(2)}</span></p>
                            <Link to='/checkout' id="checkout-btn" className='btn btn-dark'>Proceed to checkout</Link>
                        </div>
                        
                </div>
                
            )}
        </div>
     );
}
 
export default ShoppingCart;