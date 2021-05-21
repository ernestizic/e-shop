import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
 
const Navbar = () => {
    const {cartItems} = useContext(CartContext);
 
    return ( 
        <nav className="navbar bg-dark fixed-top">
            <div className='container navbar-content'>
                <Link className="navbar-brand" to="/"> <span style={{color: 'red', fontStyle:'italic', fontSize:'32px'}}>E</span> <span style={{color: 'grey'}}>Shop</span> </Link>
                <ul className="nav-item">
                    <li>
                        <Link className="nav-link" to="#">
                            <i class="material-icons">person_add_alt</i> 
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <i className="material-icons" style={{fontSize: '23px'}}>local_grocery_store</i> 
                            <span className="badge rounded-pill bg-danger">{cartItems.length}</span> 
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
     );
}
 
export default Navbar;