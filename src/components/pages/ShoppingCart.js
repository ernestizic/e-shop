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
        <div>
            <Navbar />
            <button onClick={emptyCart}>Empty cart</button>
            <h4> Cart Items </h4>
            {cartItems.length === 0 ? (
                <div>Cart is empty</div>
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
                                            <th>TAX PRICE</th>
                                            <th>SUBTOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="table-data">
                                                <img className="img-fluid cart-img" src={item.img}/>                                               
                                            </td>
                                            <td className="table-data"> <p> {item.name} </p></td>
                                            <td> 
                                                <button onClick={()=> addToCart(item) } className="btn btn-primary" id="items-btn">+</button> {item.qty} <button onClick={()=> removeFromCart(item) } className="btn btn-danger" id="items-btn">-</button> 
                                            </td>
                                            <td className="table-data"><p>{item.price}</p></td>
                                            <td className="table-data">{taxPrice.toFixed(2)}</td>
                                            <td className="table-data"><p>{item.price * item.qty}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
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