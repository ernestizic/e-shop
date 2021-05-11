import React, { createContext, useState, useEffect } from 'react';
import data from '../../data';
//import axios from "axios";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const {product} = data;
    const [products, setProducts] = useState(product);

    const getQuery =(q)=> {
        console.log(q)
        setProducts([...products.filter(prod =>
            prod.name.toLowerCase().includes(q.toLowerCase())
        )])
    }

    const gifts =()=> {
        setProducts([...products.filter(prod => prod.category === 'gifts')]);
    }
    const animals =()=> {
        setProducts([...products.filter(prod => prod.category === 'animals')]);
    }
    const vehicles =()=> {
        setProducts([...products.filter(prod => prod.category === 'vehicles')]);
    }
    const tech =()=> {
        setProducts([...products.filter(prod => prod.category === 'technology')]);
    }
    const lad =()=> {
        setProducts([...products.filter(prod => prod.category === 'ladies')]);
    }


    return ( 
        <ProductContext.Provider value={{products, getQuery, gifts, animals, vehicles, tech, lad}}>
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;