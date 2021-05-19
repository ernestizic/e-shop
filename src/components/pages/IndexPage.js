import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import ProductGrid from "../products/ProductGrid"
import Search from '../ui/Search';
import Footer from '../ui/Footer';


const IndexPage = () => {
    const {all, gifts, animals, vehicles, tech, lad} = useContext(ProductContext)
    return (
        <React.Fragment>
            <div className='container wrapper'>
                <div className="sidebar-wrapper">
                    <Search />
                    <h6>Category</h6>
                    <ul className="sidebar-nav">
                        <li><a onClick={all}>All</a></li>
                        <li><a onClick={vehicles}>Vehicles</a></li>
                        <li><a onClick={animals}>Animals</a></li>
                        <li><a onClick={gifts}>Gifts</a></li>
                        <li><a onClick={tech}>Technology</a></li>
                        <li><a onClick={lad}>Ladies</a></li>
                    </ul>
                </div>
                <div className='main-content-wrapper'>
                    <ProductGrid />
                </div>
            </div>
            {/*<Footer />*/}
        </React.Fragment>
        
     );
}
 
export default IndexPage;