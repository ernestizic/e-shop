import React, { createContext, useState, useEffect } from 'react';
import data from '../../data';
//import axios from "axios";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const {product} = data;
    const [products, setProducts] = useState(product);
    const [filtered, setFiltered] = useState(product);

    const getQuery =(q)=> {
        console.log(q)
        setFiltered([...products.filter(prod =>
            prod.name.toLowerCase().includes(q.toLowerCase())
        )])
    }

    const all =()=> {
        setFiltered([...products]);
    }
    const gifts =()=> {
        setFiltered([...products.filter(prod => prod.category === 'gifts')]);
    }
    const animals =()=> {
        setFiltered([...products.filter(prod => prod.category === 'animals')]);
    }
    const vehicles =()=> {
        setFiltered([...products.filter(prod => prod.category === 'vehicles')]);
    }
    const tech =()=> {
        setFiltered([...products.filter(prod => prod.category === 'technology')]);
    }
    const lad =()=> {
        setFiltered([...products.filter(prod => prod.category === 'ladies')]);
    }


    return ( 
        <ProductContext.Provider value={{products, filtered, getQuery, all, gifts, animals, vehicles, tech, lad}}>
            {props.children}
        </ProductContext.Provider>
     );
}
 
export default ProductContextProvider;