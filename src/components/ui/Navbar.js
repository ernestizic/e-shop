import React, {useContext} from 'react';
//import { ProductContext } from '../contexts/ProductContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
 
const Navbar = () => {
    const {cartItems} = useContext(CartContext)
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ADD TO CART </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <i className="material-icons">local_grocery_store</i> 
                                <span className="badge rounded-pill bg-primary">{cartItems.length}</span> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;