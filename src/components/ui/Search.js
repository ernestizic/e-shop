import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Search = () => {
    const {getQuery} = useContext(ProductContext)
    const [searchTerm, setSearchTerm] = useState('')

    const onChange =(q)=> {
        setSearchTerm(q)
        getQuery(q)
    }

    return ( 
        <input 
            type='search' 
            placeholder="Search"
            style={{width:'100%', textIndent: '5px', background: '#D3D3D3', margin: '10px 0'}}
            value={searchTerm}
            onChange={(e)=> onChange(e.target.value)}
        />
     );
}
 
export default Search;