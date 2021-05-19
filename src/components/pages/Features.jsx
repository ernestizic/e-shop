import React, {useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

const Features = () => {
    const {cartItems} = useContext(CartContext);
    return ( 
        <div className='features'>
            <h4>{cartItems.length}</h4>
        </div>
     );
}
 
export default Features;