import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div style={{textAlign: 'center'}}>
            <h1 style={{paddingTop: '9%', fontSize: '100px'}}>404</h1>
            <h6>This page doesn't exist!</h6>
            <Link to="/">Back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;