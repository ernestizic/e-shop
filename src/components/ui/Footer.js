import React from 'react';

const Footer = () => {
    return ( 
        <footer className="footer">
            <p> &copy; {(new Date().getFullYear())} <span style={{color: 'red', fontStyle:'italic', fontSize:'18px', fontWeight: 'bold'}}>E</span><span style={{color: 'grey', fontWeight: 'bold'}}>Shop</span> All rights reserved</p>
        </footer>
     );
}
 
export default Footer;