import React from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(e)=> {
        e.preventDefault()
        const cardElement = elements.getElement(CardElement)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        }); 
        if(error) {
            console.log(error)
        }else{
            console.log(paymentMethod);
        }
    }

    return (
        <div className='checkout-form-cover'>
            <form onSubmit={handleSubmit} className='checkout-form'>
                <CardElement/>
                <button className='btn' type='submit' disabled={!stripe}>Pay now</button>
            </form>
        </div>
    )
}

export default CheckoutForm
