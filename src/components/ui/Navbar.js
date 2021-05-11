import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
 
const Navbar = () => {
    const {cartItems} = useContext(CartContext);
 
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/"> <span style={{color: 'red', fontStyle:'italic', fontSize:'32px'}}>E</span> <span style={{color: 'grey'}}>Shop</span> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/features">Features</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <i className="material-icons">local_grocery_store</i> 
                                <span className="badge rounded-pill bg-danger">{cartItems.length}</span> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;