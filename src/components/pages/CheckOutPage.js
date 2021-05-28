import React, { useContext } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../ui/CheckoutForm';
import { CartContext } from '../contexts/CartContext';

function CheckOutPage() {
    const {cartItems} = useContext(CartContext);

    const itemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    const stripePromise = loadStripe('pk_test_51GtcaZKCYLlhiOccDSAoEzAvlXhRBwYKaFEgXoHzhvrvNJsV9Q5S6rSJiWOSwtcKsUrq17f4487b9wXJkIkHqAzx00ofidFSHw')
    return (
        <div className='wrapper container'>
            {cartItems.length > 0 && (
                <div className='checkout-content'>
                    <h2>Hello, User</h2>
                    <p>Total amount payable: <b>${totalPrice}</b> </p>
                    <p>Test Card Number: 4242 4242 4242 4242</p>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            )}
        </div>
    )
}

export default CheckOutPage
