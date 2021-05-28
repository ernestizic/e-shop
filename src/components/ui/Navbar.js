import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
 
const Navbar = () => {
    const {cartItems} = useContext(CartContext);
 
    return ( 
        <nav className="navbar bg-dark">
            <div className='container navbar-content'>
                <div>
                    <Link to='#' id="menu-bars">
                        <FaIcons.FaBars/>
                    </Link>
                    <Link className="navbar-brand" to="/"> <span style={{color: 'red', fontStyle:'italic', fontSize:'32px'}}>E</span> <span style={{color: 'grey'}}>Shop</span> </Link>
                </div>
                
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="#"> 
                            <FaIcons.FaUserPlus style={{fontSize: '23px'}}/>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            <FaIcons.FaShoppingCart style={{fontSize: '23px'}}/>
                            <span className="badge rounded-pill bg-dark">{cartItems.length}</span> 
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;