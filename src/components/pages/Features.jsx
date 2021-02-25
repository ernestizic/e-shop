import React, {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const Features = () => {
    const {cartItems} = useContext(CartContext);
    return ( 
        <div>
            <h4>You added {cartItems.length} to your cart </h4>
        </div>
     );
}
 
export default Features;