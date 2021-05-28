import React, {useContext, useState} from 'react'; //new import useState
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { ProductContext } from '../contexts/ProductContext'; //new
 
const Navbar = () => {
    const {cartItems} = useContext(CartContext);
    const {all, gifts, animals, vehicles, tech, lad} = useContext(ProductContext) //new

    const [sidebar, setSidebar] = useState(false); //new

    const toggleSidebar=()=> { //new
        setSidebar(!sidebar)
    }
 
    return ( 
        <>
        <nav className="navbar bg-dark">
            <div className='container navbar-content'>
                <div>
                    <Link to='#' className="menu-bars">
                        <FaIcons.FaBars onClick={toggleSidebar}/>
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

        <div className={sidebar? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={toggleSidebar}>
                <li className='navbar-toggle'>
                    <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <li><a onClick={all}>All</a></li>
                <li><a onClick={vehicles}>Vehicles</a></li>
                <li><a onClick={animals}>Animals</a></li>
                <li><a onClick={gifts}>Gifts</a></li>
                <li><a onClick={tech}>Technology</a></li>
                <li><a onClick={lad}>Ladies</a></li>
            </ul>
        </div>
        </>
     );
}
 
export default Navbar;