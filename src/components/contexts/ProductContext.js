import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Assorted color plastic tube bottle",
            price: 240,
            img: "img/ali-muhamad-6oJ0AptG0sM-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 2,
            name: "Febreeze air spray can",
            price: 230,
            img: "img/giorgio-trovato-7bw3REiKLI0-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 3,
            name: "Assorted make up brushes on white table ",
            price: 400,
            img: "img/johanne-kristensen-vyhYvCiL3QQ-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 4,
            name: "White ceramic mug on white texile",
            price: 300,
            img: "img/johanne-kristensen-XYkc3MfT7b4-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        },
        {
            id: 5,
            name: "The Healer & The Rover",
            price: 250,
            img: "img/jordan-nix-tR-fqLlBg5c-unsplash.jpg",
            desc: "lorem ipsum et gyukt ytgyleiglfu yjgfEYKFGEY YGJGF grgwru glfrgfrlgflrh",
        }
    ]);


    return ( 
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;