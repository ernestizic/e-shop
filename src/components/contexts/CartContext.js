import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])

    
    const addToCart =(product)=> {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x ))
        } else {
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    }

    const removeFromCart =(product)=> {
        const exist = cartItems.find((x) => x.id ===product.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x ))
        }
    }
    
    return ( 
        <CartContext.Provider  value={{cartItems, addToCart, removeFromCart}}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;